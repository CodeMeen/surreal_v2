import { Component, OnInit,AfterContentChecked,ViewChild, ViewEncapsulation } from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
import SwiperCore, { SwiperOptions,Pagination } from 'swiper';
import { Router,ActivatedRoute,NavigationExtras} from '@angular/router';
import { Storage } from '@capacitor/storage';
import { WalletsService } from '../wallets.service';
import { IonRouterOutlet } from '@ionic/angular';

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

  constructor(private wallet: WalletsService,private router: Router,private activatedRoute: ActivatedRoute,private routerOutlet: IonRouterOutlet) { }

  toNft(){
    this.swiper.swiperRef.slideTo(1,200);
  }
  toToken(){
    this.swiper.swiperRef.slideTo(0,200);
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
    this.syncTokens();
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
