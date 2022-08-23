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


  
  constructor(private router:Router,private routerOutlet: IonRouterOutlet,public events:EventsService,public wallet: WalletsService) { }


  async alwaysupdatebalances(message?){

    if(message){
      console.log(message)
    }
   
    
      await this.wallet.getWalletMetadata()
     


      setTimeout(async ()=>{
       await this.alwaysupdatebalances()
      },30000)
      
 
    
   
  }

  async alwaysupdateprices(message?){
    if(message){
      console.log(message)
    }


    await this.wallet.getAllPrices()


    setTimeout(async ()=>{
      await this.alwaysupdateprices()
    },600000)


  }
 

  async ngOnInit() {
    this.alwaysupdatebalances('first call:- Update Balance')
    this.alwaysupdateprices('first call:- Update Prices')

    this.routerOutlet.swipeGesture = false;

    if(this.router.url=='/account/swaptoken'){
this.panelmode='dark';
    }else{
this.panelmode='light';
    }

   
   
  }

  async ionViewDidEnter() {

    this.events.publish('UpdateHome')
    this.routerOutlet.swipeGesture = false;
}


}
