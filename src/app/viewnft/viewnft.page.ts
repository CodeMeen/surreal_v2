import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { EventsParams, SwiperComponent } from "swiper/angular";
import SwiperCore, { SwiperOptions, Pagination, EffectCards } from "swiper";
import { HttpClient } from "@angular/common/http";
import { IonRouterOutlet } from "@ionic/angular";
import { Browser } from "@capacitor/browser";
import { Clipboard } from "@capacitor/clipboard";
import { NotiService } from "../noti.service";

SwiperCore.use([EffectCards, Pagination]);

@Component({
  selector: "app-viewnft",
  templateUrl: "./viewnft.page.html",
  styleUrls: ["./viewnft.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewnftPage implements AfterContentChecked, OnInit {
  @ViewChild("swiper") swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true,
      type: "fraction",
    },
    effect: "cards",
    cardsEffect: {
      // ...
    },
  };

  reloading=true;

  nfts: any[] = [];

  currentNftIndex: any=0;
  currentNft: any = {};
  currentMetadata: any = {};
  popUp: any = {
    popopened: false,
    height: "maxi",
    messagetitle: "Send NFT",
    message: "See NFT details and enter recipient address below",
    imageurl: "",
  };

  nftToSend: any = {};

  NftSendingData: any = {
    recipient: "",
  };

  constructor(
    public router: RouterService,
    private route: ActivatedRoute,
    public wallet: WalletsService,
    private http: HttpClient,
    private routerOutlet: IonRouterOutlet,
    private cd: ChangeDetectorRef,
    public noti: NotiService
  ) {}

  async updateView() {
    const routeParams = this.route.snapshot.paramMap;
    let nftaddr = routeParams.get("nftaddr");

    await this.wallet.loadNft(nftaddr).then(
      (data) => {
       

        if(data.length != this.nfts.length){
        this.nfts = data;

        console.log(this.nfts)

        this.currentNft = this.nfts[this.currentNftIndex];

        this.currentNft["shortAddress"] = this.shortAddr(
          this.currentNft.token_address
        );
        this.currentMetadata = JSON.parse(this.currentNft.metadata);

        if (!this.currentMetadata.name || this.currentMetadata.name == "") {
          this.currentMetadata["name"] = this.currentNft.name;
        }

        this.loadNftImgs();

        }

      },
      (error) => {}
    );

  
  }

  async copyStr(text) {
    await Clipboard.write({
      string: text,
    });

    this.noti.notify("success", "Copied!");
  }


  async pasteReceipient(){
    const { type, value } = await Clipboard.read();

   this.NftSendingData.recipient=value
  }


  closePop() {
    this.popUp = {
      popopened: false,
      height: true,
      messagetitle: "",
      message: "",
      imageurl: "",
    };
  }

  sendCurrentNft() {
    let messagetitle = "Send NFT";
    let message = "See NFT details and enter recipient address below";

    this.popUp = {
      popopened: true,
      height: "maxi",
      messagetitle: messagetitle,
      message: message,
      imageurl: this.currentNft.loaded_media,
    };

    this.nftToSend = this.currentNft;

  }

  async confirmSend(){

    let recipient=this.NftSendingData.recipient

    if(!recipient || recipient==''){
this.noti.notify('error','Empty Recipient!')
    }else{

      console.log(this.nftToSend)
      let txdata={
       'token':this.nftToSend,
       'to': this.NftSendingData.recipient,
       'from': await this.wallet.getPublicKey('ethereum')
      }
  
      console.log(txdata)


      if(this.nftToSend.contract_type=='ERC721'){

await this.wallet.sendErc721Tx(txdata).then((value:any)=>{
if(value.status==true){
  this.noti.notify('success','Transaction Submitted','Confirmation is pending');
  this.popUp.popopened=false
  this.wallet.getNfts()
}



})

      }else if(this.nftToSend.contract_type=='ERC1155'){
        await this.wallet.sendErc1155Tx(txdata).then((value:any)=>{
          if(value.status==true){
            this.noti.notify('success','Transaction Submitted','Confirmation is pending');
            this.popUp.popopened=false
          }
          })
      }

    }
  
  }

  shortAddr(string) {
    let firstpart = string.slice(0, 7);
    let lastpart = string.slice(-7);

    let newstring = firstpart + "..." + lastpart;

    return newstring;
  }

  updatecurrindex(event) {
    this.currentNftIndex = this.swiper.swiperRef.activeIndex;
    this.currentNft = this.nfts[this.currentNftIndex];
    this.currentNft["shortAddress"] = this.shortAddr(
      this.currentNft.token_address
    );
    this.currentMetadata = JSON.parse(this.currentNft.metadata);

    if (!this.currentMetadata.name || this.currentMetadata.name == "") {
      this.currentMetadata["name"] = this.currentNft.name;
    }

    this.cd.detectChanges();
  }

  async loadNftImgs() {
    let nfts = this.nfts;

    for (let index = 0; index < nfts.length; index++) {
      let nftindex = index;
      let eachnft = nfts[index];
      let imgUrl = eachnft.raw_media;

      let newImgUrl = imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/");

      if (newImgUrl.search("data:image") >= 1) {
        eachnft["media_type"] = "image";
        eachnft["loaded_media"] = newImgUrl;
        eachnft["media_status"] = "loaded";
      } else if (newImgUrl.search("data:video") >= 1) {
        eachnft["media_type"] = "video";
        eachnft["loaded_media"] = newImgUrl;
        eachnft["media_status"] = "loaded";
      } else {
        this.http.get(newImgUrl, { responseType: "blob" }).subscribe(
          async (res) => {
            let blobdata: Blob = res;

            if (
              (blobdata.type == "image/png" ||
                blobdata.type == "image/gif" ||
                blobdata.type == "image/jpeg" ||
                blobdata.type == "video/mp4") &&
              blobdata.size <= 15000000
            ) {
              let gendata = new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);

                reader.readAsDataURL(blobdata);
              });

              let base64img = await gendata;

              if (
                blobdata.type == "image/png" ||
                blobdata.type == "image/gif" ||
                blobdata.type == "image/jpeg"
              ) {
                eachnft["media_type"] = "image";
              } else if (blobdata.type == "video/mp4") {
                eachnft["media_type"] = "video";
              }

              eachnft["loaded_media"] = base64img;
              eachnft["media_status"] = "loaded";
            }
          },

          (err) => {
            eachnft["media_status"] = "error";
            eachnft["loaded_media"] = "../../assets/images/offline.svg";
            console.log(err);
          }
        );
      }
    }
  }

  async goToOpensea(token_addr,token_id) {
    let network=await this.wallet.getCurrentNetworkName(), 
    mapurl;

    if(network != "mainnet"){
      mapurl=`https://testnets.opensea.io/assets/${token_addr}/${token_id}`
    }else{
      mapurl=`https://opensea.io/assets/${token_addr}/${token_id}`
    }



    await Browser.open({ url: mapurl });
  }

  async reloadFunc(){

    this.updateView();

    if(this.reloading==true) {
      setTimeout(async () =>{
        this.reloadFunc();
      },this.wallet.reloadtime)
    }

  
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  async ngOnInit() {
    this.routerOutlet.swipeGesture = true;
    const routeParams = this.route.snapshot.paramMap;
    let nftaddr = routeParams.get("nftaddr");

    await this.wallet.loadNft(nftaddr).then(
      (data) => {
        this.nfts = data;
        this.currentNft = this.nfts[0];
        this.currentNft["shortAddress"] = this.shortAddr(
          this.currentNft.token_address
        );
        this.currentMetadata = JSON.parse(this.currentNft.metadata);

        if (!this.currentMetadata.name || this.currentMetadata.name == "") {
          this.currentMetadata["name"] = this.currentNft.name;
        }

        this.loadNftImgs();
      },
      (error) => {}
    );
    this.wallet.getNfts()
  }


  ionViewWillEnter(){
    console.log('Entering View Nfts..')
    this.reloading=true
    this.wallet.getNfts()
    this.reloadFunc()
  }


  ionViewWillLeave(){
    console.log('Leaving View Nfts..')
    this.reloading=false
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
  }


  ngOnDestroy() {
  this.reloading=false
  console.log("Left View Nfts")
  }



}
