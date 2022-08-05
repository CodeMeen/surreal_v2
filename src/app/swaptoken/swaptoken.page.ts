import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { EventsService } from '../events.service';
import { NotiService } from '../noti.service';

@Component({
  selector: 'app-swaptoken',
  templateUrl: './swaptoken.page.html',
  styleUrls: ['./swaptoken.page.scss'],
})
export class SwaptokenPage implements OnInit {

  fromtokenvalue;
  totokenvalue;

  fromtokenusd=0;
  totokenusd=0;

  fromtoken:any={};
  totoken:any={};

  successflag=false;

  swap:any={
    'fromtokenusd':0,
    'totokenusd':0
  }

  constructor(public wallet: WalletsService,private events:EventsService, public noti:NotiService) { }

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

  async swapFunc(type,value){
    if(isNaN(value)){
      this.noti.notify('error','Invalid Input','Only numbers are allowed');
      this.successflag=false;
      console.log("Not a number")
          }else{
            this.successflag=true;

            if(type=='fromtoken'){

              if(this.fromtokenusd > 0){


                let usdAmt=await (value * this.fromtokenusd);
                this.swap.fromtokenusd=usdAmt

                this.swap.totokenusd=usdAmt

                if(this.totokenusd > 0){
                  let exctokenval=await (usdAmt / this.totokenusd)
                  this.totokenvalue=this.numberize(exctokenval,true);
  
                }

              }

            }else if(type=='totoken'){

              if(this.totokenusd > 0){


                let usdAmt=await (value * this.totokenusd);
                this.swap.totokenusd=usdAmt

                this.swap.fromtokenusd=usdAmt

                if(this.fromtokenusd > 0){
                  let exctokenval=await (usdAmt / this.fromtokenusd)
                  this.fromtokenvalue=this.numberize(exctokenval,true);
  
                }

              }


        
            }


          }
  }

  async syncToken(){
this.fromtoken=(await this.wallet.getMyTokens())[0];
this.totoken=await this.wallet.getAToken('Dai','ERC20');
  }

  async syncTokenPrice(type){

    if(type=="fromtoken"){

      await this.wallet.getTokenPrice(this.fromtoken.symbol).then(async (value: number)=>{
        this.fromtokenusd=value;
      await this.wallet.updateToken(this.fromtoken.name,this.fromtoken.type,{'usdprice':this.fromtokenusd});
        console.log(value+" Loaded from market");
      })
      .catch(async (error)=>{
  
        let prt:any=this.fromtoken.usdprice
  
        if(!prt){
  this.noti.notify('error',"Couldn't load resources","Check internet connection!");
        }else{
    this.fromtokenusd=prt;
    console.log(this.fromtokenusd+" Loaded from memory");
        }
  
  
      })

    }else if(type=='totoken'){

      await this.wallet.getTokenPrice(this.totoken.symbol).then(async (value: number)=>{
        this.totokenusd=value;
      await this.wallet.updateToken(this.totoken.name,this.totoken.type,{'usdprice':this.totokenusd});
        console.log(value+" Loaded from market");
      })
      .catch(async (error)=>{
  
        let prt:any=this.totoken.usdprice
  
        if(!prt){
  this.noti.notify('error',"Couldn't load resources","Check internet connection!");
        }else{
    this.totokenusd=prt;
    console.log(this.totokenusd+" Loaded from memory");
        }
  
  
      })

    }

  }



ionViewWillEnter(){
  
  this.events.getData().subscribe(async (data) => {
    if(data=="UpdateSwap"){
      await this.syncToken().then(async (value)=>{
        await this.syncTokenPrice('fromtoken')
        await this.syncTokenPrice('totoken')
        console.log('Swap Page Updated..')
      });
    }
}); 
    
  }


ngOnInit() {
this.syncToken().then(async (value)=>{
  await this.syncTokenPrice('fromtoken')
  await this.syncTokenPrice('totoken')
});
  }

}
