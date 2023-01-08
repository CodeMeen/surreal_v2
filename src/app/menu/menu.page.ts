import { Component, OnInit,OnDestroy, ViewEncapsulation,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { raw } from 'express';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Browser } from "@capacitor/browser";
import { FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MenuPage implements OnInit {
 

  airdrop_metadata:any={
    airdrop_can_start:''
  }
  airdrop_data:any={

  }
  airdropWallet:any

  reloading=true;

  discovertkns:any;


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

  

  async openLink(mapurl){
    await Browser.open({ url: mapurl }); 
  
  }

  async startFunc(){
    let airdrop, appsettings;

    airdrop=await this.wallet.getAirdrop();
    appsettings=await this.wallet.getAppSettings();
   

    this.airdrop_metadata=appsettings.airdrop_metadata
    this.airdrop_data=airdrop

    this.airdropWallet=await this.wallet.checkAirdropWallet();

  }

  async discovertokens(){
    let randtkns=[]
    let alltkns= await this.wallet.getAllTokens()
   

   for (let index = 0; index < 4; index++) {

    let randtkn= alltkns[Math.floor(Math.random()*alltkns.length)];
     randtkns.push(randtkn)
   }

   this.discovertkns=randtkns


  }


  async ionViewWillEnter(){
    console.log('Entering Menu..')
    await this.startFunc();
   
    this.reloading=true
  this.reloadFunc()
  }


  async ionViewWillLeave(){
    console.log('Leaving Menu..')
    this.reloading=false
  }


ngOnDestroy() {
  console.log("Left Menu..")
  this.reloading=false
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = false;
  }


  async ngOnInit() {
    await this.startFunc();
  }

  async reloadFunc(){

    this.startFunc();

    if(this.reloading==true) {
      setTimeout(async () =>{
        this.reloadFunc();
      },this.wallet.reloadtime)
    }

  }

  progressSize(progress){

    let styles = {
      'width': progress + '%',
    };
    return styles;

  }


 /* circulize(progress){
    let rotate= progress * 3.6
    if(progress <= 50){
      this.leftside.nativeElement.style.transform ='rotate('+rotate+'deg)';
      this.rightside.nativeElement.style.display='none'
    }else{
     this.pie.nativeElement.style.clip = 'rect(auto, auto, auto, auto)';
      this.leftside.nativeElement.style.transform = 'rotate('+rotate+'deg)';
      this.rightside.nativeElement.style.transform='rotate('+180+'deg)';
    }
  } */

}
