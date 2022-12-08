import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { EventsParams, SwiperComponent } from "swiper/angular";
import SwiperCore, { SwiperOptions, Pagination } from "swiper";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { NgxImageCompressService } from "ngx-image-compress";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoaderService } from "../loader.service";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class WalletPage implements OnInit, AfterContentChecked,OnDestroy {
  @ViewChild("swiper") swiper: SwiperComponent;

  assetsconfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
  };

  mywallet: any = {};

  currentwalletid:any

  mytokens: any[] = [];
  mynfts: any[] = [];
  network:any;

  numoftk: any;
  totalbalance: any;

  currentslide = 0;

  
  rawnfts:any

  reloading=true;

  constructor(
    private cd: ChangeDetectorRef,
    public wallet: WalletsService,
    public router: RouterService,
    private activatedRoute: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private events: EventsService,
    private imageCompressor: NgxImageCompressService,
    private http: HttpClient,
    public loader: LoaderService
  ) {

  }

  numberize(x, nocomma?, num?) {
    let rx;
    if (num) {
      rx = x.toFixed(num);
    } else {
      rx = x.toFixed(2);
    }

    if (nocomma === true) {
      return rx.toString();
    }else{
      return rx.toString();
    }
  }

  updatecurrindex(event) {
    this.currentslide = this.swiper.swiperRef.activeIndex;

    this.cd.detectChanges();
  }

  toNft() {
    this.swiper.swiperRef.slideTo(1, 200);
    this.currentslide = this.swiper.swiperRef.activeIndex;
  }
  toToken() {
    this.swiper.swiperRef.slideTo(0, 200);
    this.currentslide = this.swiper.swiperRef.activeIndex;
  }

  calculatebalance() {
    let total = 0;
    let mytokens = this.mytokens;

    for (let index = 0; index < mytokens.length; index++) {
      const eachtoken = mytokens[index];

      if (!eachtoken || eachtoken == "") {
      } else {
        total = total + parseInt(eachtoken.usdbalance);
      }
    }

    this.totalbalance = this.numberize(total, 2);
  }
  async goToBack() {}

  async updateTokenViewBalance() {
    let newtokens: any = await this.wallet.getMyTokens();
    let previoustkns: any = this.mytokens;

    if (newtokens.length == previoustkns.length) {
      for (let index = 0; index < newtokens.length; index++) {
        const eachnewtkn = newtokens[index];
        let eachprevioustkn = previoustkns[index];

        if (
          eachnewtkn.coinbalance == eachprevioustkn.coinbalance &&
          eachnewtkn.usdbalance == eachprevioustkn.usdbalance
        ) {
        } else {
          this.mytokens[index].coinbalance = eachnewtkn.coinbalance;
          this.mytokens[index].usdbalance = eachnewtkn.usdbalance;
        }
      }

      this.calculatebalance();
    }
  }

  async updateView() {

    let data = await this.wallet.getMyWallet();
    this.mywallet = data;
    

    // update tokens
    let newtokens: any = await this.wallet.getMyTokens();
    let previoustkns: any = this.mytokens;

    if (newtokens.length == previoustkns.length) {
      this.updateTokenViewBalance();
    } else if (newtokens.length > previoustkns.length) {
      for (let index = previoustkns.length; index < newtokens.length; index++) {
        this.mytokens.push(newtokens[index]);
      }

      this.updateTokenViewBalance();
    } else if (newtokens.length < previoustkns.length) {
      this.mytokens = newtokens;

      this.updateTokenViewBalance();
    }
     

    // end 

    //Update nfts
await this.updateNfts()
    //

    // Incase Wallet Changes

    let currentwalletid=this.currentwalletid
    let newid=data.id

    if(currentwalletid != newid){
      await this.getView().then(async () => {
        console.log("Wallet Page Updated..");
       
       this.loadNftImgs();
      }); 
    }

    // Incase wallet network changes this happens

    let currentNetwork=this.mywallet.network;

    let loadNetwork=await this.wallet.getCurrentNetworkName()

    if(currentNetwork!=loadNetwork) {

      await this.getView().then(async () => {
        console.log("Wallet Page Updated..");
       
       this.loadNftImgs();
      }); 

    /*
      let data = await this.wallet.getMyWallet();
      this.mywallet = data;
      this.mytokens = await this.wallet.getMyTokens();
      this.numoftk = this.mywallet.mytokens.length;

      await this.wallet.loadMyNfts().then((value) => {
        this.mynfts =value
        this.loadNftImgs()
      })

      */
    }


    // end

  }


  imgResultBeforeCompression: string = "";
  imgResultAfterCompression: string = "";

  async compressImg() {
    this.imageCompressor.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompression = image;
      console.log(
        "Size in bytes of the uploaded image was:",
        this.imageCompressor.byteCount(image)
      );

      this.imageCompressor
        .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
        .then((compressedImage) => {
          this.imgResultAfterCompression = compressedImage;
          console.log(
            "Size in bytes after compression is now:",
            this.imageCompressor.byteCount(compressedImage)
          );
        });
    });
  }

  async loadNftImgs() {
    let nfts = this.mynfts;

    for (let index = 0; index < nfts.length; index++) {
      let nftindex = index;
      let eachnft = nfts[index];
      let imgUrl = eachnft.raw_media; 

      let newImgUrl=imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/");

      if(newImgUrl.search('data:image') >= 1){
        eachnft['media_type']='image'
        eachnft['loaded_media']=newImgUrl
        eachnft['media_status']='loaded'
      }else if(newImgUrl.search('data:video') >= 1){
        eachnft['media_type']='video'
        eachnft['loaded_media']=newImgUrl
        eachnft['media_status']='loaded'
      }else{
        this.http.get(newImgUrl, { responseType: "blob" }).subscribe(
          async (res) => {
            let blobdata: Blob = res;

          
            if( (blobdata.type == 'image/png' || blobdata.type == 'image/gif' ||  blobdata.type == 'image/jpeg' || blobdata.type == 'video/mp4') && blobdata.size <= 15000000 ){

           

              let gendata=new Promise((resolve,reject)=>{
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
  
                reader.readAsDataURL(blobdata);
              })
  
              let base64img=await gendata

              if( blobdata.type == 'image/png' || blobdata.type == 'image/gif' ||  blobdata.type == 'image/jpeg' ){
                eachnft['media_type']='image'
              }else if(blobdata.type == 'video/mp4'){
                eachnft['media_type']='video'
              }

              eachnft['loaded_media']=base64img
              eachnft['media_status']='loaded'


            }

          },

          (err) => {
            eachnft['media_status']='error'
            eachnft['loaded_media']='../../assets/images/offline.svg'
            console.log(err);
            
          }
        );
      }

     
    

     

      
    }
  }

  async getView() {
    try {
      let data = await this.wallet.getMyWallet();
      this.mywallet = data;

      this.currentwalletid=data.id;

      this.mytokens = await this.wallet.getMyTokens();
      this.mynfts = await this.wallet.loadMyNfts();
      this.rawnfts=await this.wallet.getRawNfts();

      this.numoftk = this.mywallet.mytokens.length;
    } catch (error) {
      console.log(error)
      this.router.naviTo(["junc"]);
    }

    this.calculatebalance();
  }

  

  async updateNfts(){

    let currentNfts=await this.wallet.getRawNfts();
    let previousNfts=this.rawnfts

    if(currentNfts.length != previousNfts.length){
      this.mynfts = await this.wallet.loadMyNfts();
      this.rawnfts=await this.wallet.getRawNfts();
      this.loadNftImgs()
    }
  
  }


  async ngOnInit() {
    this.routerOutlet.swipeGesture = false;

    await this.getView().then(async () => {
      console.log("Wallet Page Updated..");
     
     this.loadNftImgs();
    }); 
    
  }

  async reloadFunc(){

    this.updateView();

    if(this.reloading==true) {
      setTimeout(async () =>{
        this.reloadFunc();
      },this.wallet.reloadtime)
    }


  
  }




ionViewWillEnter(){
  console.log('Entering Wallet..')
  this.reloading=true
  this.reloadFunc()
}


ionViewWillLeave(){
  console.log('Leaving Wallet..')
  this.reloading=false
}

async ionViewDidEnter() {
    
  this.routerOutlet.swipeGesture = false;
}


  ngOnDestroy() {
  this.reloading=false
  console.log("Left Wallet..")
  }

  

  ngAfterContentChecked() {

    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}
