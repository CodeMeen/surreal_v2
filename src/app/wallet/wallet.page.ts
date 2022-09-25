import {
  Component,
  OnInit,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { EventsParams, SwiperComponent } from "swiper/angular";
import SwiperCore, { SwiperOptions, Pagination } from "swiper";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { RouterService } from "../router.service";
import { Storage } from "@capacitor/storage";
import { WalletsService } from "../wallets.service";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { NgxImageCompressService } from "ngx-image-compress";
import { HttpClient, HttpHeaders } from "@angular/common/http";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class WalletPage implements OnInit, AfterContentChecked {
  @ViewChild("swiper") swiper: SwiperComponent;

  assetsconfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
  };

  mywallet: any = {};
  mytokens: any[] = [];
  mynfts: any[] = [];
  network:any;

  numoftk: any;
  totalbalance: any;

  currentslide = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private wallet: WalletsService,
    public router: RouterService,
    private activatedRoute: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private events: EventsService,
    private imageCompressor: NgxImageCompressService,
    private http: HttpClient
  ) {}

  numberize(x, nocomma?, num?) {
    let rx;
    if (num) {
      rx = x.toFixed(num);
    } else {
      rx = x.toFixed(2);
    }

    if (nocomma === true) {
      return rx.toString();
    } else if (nocomma === false || !nocomma) {
      return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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

    this.totalbalance = this.numberize(total, false, 2);
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

  async alwaysUpdateView() {
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
     
    let currentNetwork=this.mywallet.network;

    let loadNetwork=await this.wallet.getCurrentNetworkName()

    if(currentNetwork!=loadNetwork) {
      let data = await this.wallet.getMyWallet();
      this.mywallet = data;
      this.mytokens = await this.wallet.getMyTokens();
      this.numoftk = this.mywallet.mytokens.length;
    }




    let newNfts:any = await this.wallet.loadMyNfts()
    let previousNfts:any= this.mynfts;

    

    setTimeout(async () => {
      await this.alwaysUpdateView();
    }, 2000);
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
      this.mytokens = await this.wallet.getMyTokens();
      this.mynfts = await this.wallet.loadMyNfts();

      this.numoftk = this.mywallet.mytokens.length;
    } catch (error) {
      this.router.naviTo(["home"]);
    }

    this.calculatebalance();
  }

  /* ionViewWillEnter(){

  this.events.getData().subscribe(async (data) => {
    if(data=="UpdateHome"){
      await this.syncTokens();
      this.routerOutlet.swipeGesture = false;
    }
});


    
  }

  */


  async ngOnInit() {
    this.routerOutlet.swipeGesture = false;

    await this.getView().then(async () => {
      console.log("Wallet Page Updated..");
      this.alwaysUpdateView();
     this.loadNftImgs();
     
    });
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}
