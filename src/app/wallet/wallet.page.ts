import { Component, OnInit,AfterContentChecked,ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import {EventsParams, SwiperComponent} from 'swiper/angular';
import SwiperCore, { SwiperOptions,Pagination } from 'swiper';
import { Router,ActivatedRoute,NavigationExtras} from '@angular/router';
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
    numoftk:any;
    totalbalance:any;

 currentslide=0;

  constructor(private cd: ChangeDetectorRef,private wallet: WalletsService,private router: Router,private activatedRoute: ActivatedRoute,private routerOutlet: IonRouterOutlet,private events: EventsService) { }

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
    let mytokens=this.mywallet.mytokens;

    for (let index = 0; index < mytokens.length; index++) {
      const eachtoken = mytokens[index];

      if(!eachtoken){

      }else{
        total =total + parseInt(eachtoken.usdbalance);
      }

      
    }

    this.totalbalance=total;
  }
async goToBack(){
  
}
  async syncTokens(){
    try {

      let data=await this.wallet.getMyWallet();
      this.mywallet=data;
      this.numoftk=this.mywallet.mytokens.length;

    } catch (error) {
      this.router.navigate(['home']);
    }
  
    this.calculatebalance();
  }

ionViewWillEnter(){
  this.events.getData().subscribe((data) => {
    if(data=="UpdateHome"){
      this.syncTokens();
      this.routerOutlet.swipeGesture = false;
    }
});
    
  }
  
  async ngOnInit() {

    this.syncTokens()
    this.routerOutlet.swipeGesture = false;
    
  }


  async ngAfterContentChecked() {

    if(this.swiper){
    this.swiper.updateSwiper({});
    }

    }


    

}
