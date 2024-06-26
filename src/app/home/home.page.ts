import { AfterContentChecked, ChangeDetectorRef, Component,ViewChild,ViewEncapsulation,OnInit } from '@angular/core';
import {SwiperComponent} from 'swiper/angular';
import SwiperCore, { SwiperOptions,Pagination } from 'swiper';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { IonRouterOutlet } from '@ionic/angular';

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
    

 

  constructor(private cd: ChangeDetectorRef,private router: RouterService,private routerOutlet: IonRouterOutlet,public wallet: WalletsService) {

  }

  async getStarted(){
    await this.wallet.createDefault().then(()=>{
      this.router.naviTo(['/account']);
    },
    (error)=>{
      console.log('Error',JSON.stringify(error))
    }) 
  }

 
   async checkToPage(){
     let wallets=await this.wallet.getAllWallet();
     if(!wallets || wallets == null){
     }else{
 this.router.naviTo(['/account']);
     }
   }



  ngAfterContentChecked() {

    if(this.swiper){
    this.swiper.updateSwiper({});
    }
    
    }

    async ionViewDidEnter() {
      this.routerOutlet.swipeGesture = false;
      await this.checkToPage()
  }

    async ngOnInit(){

    }

}
