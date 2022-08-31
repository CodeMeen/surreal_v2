import { Component, OnInit,AfterContentChecked,ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import {EventsParams, SwiperComponent} from 'swiper/angular';
import SwiperCore, { SwiperOptions,Pagination } from 'swiper';
import { ActivatedRoute,NavigationExtras} from '@angular/router';
import { RouterService } from '../router.service';
import { Storage } from '@capacitor/storage';
import { WalletsService } from '../wallets.service';
import { IonRouterOutlet } from '@ionic/angular';
import { EventsService } from '../events.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalletPage implements OnInit,AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  assetsconfig: SwiperOptions= {
    slidesPerView: 1,
    pagination:{clickable:true},
    };

    mywallet:any={};
    mytokens:any[]=[]
    mynfts:any[]=[]


    numoftk:any;
    totalbalance:any;

 currentslide=0;

  constructor(private cd: ChangeDetectorRef,private wallet: WalletsService,public router: RouterService,private activatedRoute: ActivatedRoute,private routerOutlet: IonRouterOutlet,private events: EventsService) { }


  numberize(x,nocomma?,num?) {
    let rx;
    if(num){
     rx=x.toFixed(num);
    }else{
    rx=x.toFixed(2);
    }

    if(nocomma===true){
return rx.toString();
    }else if(nocomma===false || !nocomma){
      return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    
     
 }

  updatecurrindex(event){
    this.currentslide=this.swiper.swiperRef.activeIndex;
  
    this.cd.detectChanges();
  }

  toNft(){
    this.swiper.swiperRef.slideTo(1,200);
   this.currentslide=this.swiper.swiperRef.activeIndex;
  }
  toToken(){
    this.swiper.swiperRef.slideTo(0,200);
    this.currentslide=this.swiper.swiperRef.activeIndex;
  }

  calculatebalance(){
    let total=0;
    let mytokens=this.mytokens;

    for (let index = 0; index < mytokens.length; index++) {
      const eachtoken = mytokens[index];

      if(!eachtoken){

      }else{
        total =total + parseInt(eachtoken.usdbalance);
      }

      
    }

    this.totalbalance=this.numberize(total,false,2);
  }
async goToBack(){
  
}


async alwaysUpdateView(){

  
  let newtokens:any=await this.wallet.getMyTokens()
  let previoustkns:any=this.mytokens;



  if(newtokens.length==previoustkns.length){
    for (let index = 0; index < newtokens.length; index++) {
    
      const eachnewtkn = newtokens[index]
      let eachprevioustkn=previoustkns[index]

      if(eachnewtkn.coinbalance==eachprevioustkn.coinbalance && eachnewtkn.usdbalance==eachprevioustkn.usdbalance){
       
      }else{
        this.mytokens[index].coinbalance=eachnewtkn.coinbalance
        this.mytokens[index].usdbalance=eachnewtkn.usdbalance

        this.calculatebalance()
      }
  
      
    }

  }



  setTimeout(async ()=>{
    await this.alwaysUpdateView()
   },3000)

  


}


  async syncTokens(){
    try {

      let data=await this.wallet.getMyWallet();
      this.mywallet=data;
      this.mytokens=await this.wallet.getMyTokens()
      this.mynfts

      this.numoftk=this.mywallet.mytokens.length;

    } catch (error) {
      this.router.naviTo(['home']);
    }
  
    this.calculatebalance();
  }

ionViewWillEnter(){

  this.events.getData().subscribe(async (data) => {
    if(data=="UpdateHome"){
      await this.syncTokens();
      console.log('Wallet Page Updated..')
      this.routerOutlet.swipeGesture = false;
    }
});


    
  }
  
  async ngOnInit() {

   
    await this.syncTokens()
    this.routerOutlet.swipeGesture = false;

    this.alwaysUpdateView()

    
    
  }


 ngAfterContentChecked() {

    if(this.swiper){
    this.swiper.updateSwiper({});
    }

    }


    

}
