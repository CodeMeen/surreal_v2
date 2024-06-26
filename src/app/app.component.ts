import { Component} from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { WalletsService } from './wallets.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})




export class AppComponent {
  private initPlugin: boolean;
  isAppActive: boolean=true

constructor(
    private platform: Platform,
    private wallet: WalletsService
  ) {   
    this.platform.ready().then(async () => {
     
        this.isAppActive=true
        this.alwaysupdatebalances('first call:- Update Balance')
        this.alwaysupdateprices('first call:- Update Prices')
        this.alwaysupdatenfts('first call:- Update Nfts')
        this.alwaysgeterc('first call:-Get ERCs in wallet');
        //this.alwaysupdatepages()

      
    })

    App.addListener('pause',async () => {
      this.isAppActive=false
      console.log('App is Minimized');

    })


    App.addListener('resume',async () => {
      this.isAppActive=true
      console.log('App is Active')

    })
   

  console.log('Started Surreal Wallet');
  
 
}

async alwaysupdatebalances(message?){

  if(message){
    console.log(message)
  }

  let allwallets=await this.wallet.getAllWallet();

  if(!allwallets){

  }else{

    if(this.isAppActive==true){
      await this.wallet.getWalletMetadata()
    }
    
  }
    setTimeout(async ()=>{
     await this.alwaysupdatebalances()
    },30000)
     
}



async alwaysupdatenfts(message?){
  if(message){
    console.log(message)
  }

  let allwallets=await this.wallet.getAllWallet();

  if(!allwallets){

  }else{

    if(this.isAppActive==true){
      await this.wallet.getNfts()
    }
    
  }
 

    setTimeout(async ()=>{
     await this.alwaysupdatenfts()
    },240000)
}

async alwaysupdateprices(message?){
  if(message){
    console.log(message)
  }

  let allwallets=await this.wallet.getAllWallet();

  if(!allwallets){

  }else{

    if(this.isAppActive==true){
      await this.wallet.getAllPrices()
      }
    
    
  }

  setTimeout(async ()=>{
    await this.alwaysupdateprices()
  },300000)


}

async alwaysgeterc(message?){
  if(message){
    console.log(message)
  }

  let allwallets=await this.wallet.getAllWallet();

  if(!allwallets){

  }else{
    if(this.isAppActive==true){
      this.wallet.getErc20InWallet()
      }
  }

  

  setTimeout(async ()=>{
    await this.alwaysgeterc()
  },420000)
}






}
