import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
import { WalletsService } from '../wallets.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  
  panelmode;
  
  constructor(public router:Router,private routerOutlet: IonRouterOutlet,public events:EventsService,public wallet: WalletsService) { }


  async alwaysupdatebalances(message?){

    if(message){
      console.log(message)
    }
   
    
      await this.wallet.getWalletMetadata()
     


      setTimeout(async ()=>{
       await this.alwaysupdatebalances()
      },35000)
      
 
    
   
  }

  async alwaysupdatenfts(message?){
    if(message){
      console.log(message)
    }
   
    
      await this.wallet.getNfts()
     


      setTimeout(async ()=>{
       await this.alwaysupdatenfts()
      },240000)
  }

  async alwaysupdateprices(message?){
    if(message){
      console.log(message)
    }


    await this.wallet.getAllPrices()


    setTimeout(async ()=>{
      await this.alwaysupdateprices()
    },420000)


  }

  async alwaysgeterc(message?){
    if(message){
      console.log(message)
    }

    this.wallet.getErc20InWallet()

    setTimeout(async ()=>{
      await this.alwaysgeterc()
    },420000)
  }
 
  /* async alwaysupdatepages(){
    this.events.publish('UpdatePages');


      setTimeout(async ()=>{
      await this.alwaysupdatepages()
     },3000)
     
  }

  */

  async ngOnInit() {
    this.alwaysupdatebalances('first call:- Update Balance')
    this.alwaysupdateprices('first call:- Update Prices')
    this.alwaysupdatenfts('first call:- Update Nfts')
    this.alwaysgeterc('first call:-Get ERCs in wallet');
    //this.alwaysupdatepages()

    

    this.routerOutlet.swipeGesture = false;
    let currenturl=this.router.url

    if(currenturl.search('/account/menu') > -1){
this.panelmode='light';
    }else{
this.panelmode='light';
    }

   
   
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = false;
}


}
