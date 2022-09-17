import { AfterContentChecked, ChangeDetectorRef, Component,ViewChild,ViewEncapsulation,OnInit } from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
import SwiperCore, { SwiperOptions,Pagination } from 'swiper';
import { RouterService } from '../router.service';
import { Storage } from '@capacitor/storage';
import { WalletsService } from '../wallets.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class HomePage implements AfterContentChecked,OnInit{
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions= {
    slidesPerView: 1,
    pagination:{clickable:true},
    };
    

 

  constructor(private cd: ChangeDetectorRef,private router: RouterService,private wallet: WalletsService) {

  }

  async getStarted(){
    await this.wallet.createDefault().then(()=>{
      this.router.naviTo(['/account']);
    })
   
  }

  ngAfterContentChecked() {

    if(this.swiper){
    this.swiper.updateSwiper({});
    }
    
    }

    async ngOnInit(){

      let wallets=await this.wallet.getAllWallet();

      if(!wallets){

      }else{
this.router.naviTo(['/account']);
      }

    }

}
