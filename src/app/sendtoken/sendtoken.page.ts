import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Clipboard } from '@capacitor/clipboard';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NotiService } from '../noti.service';

@Component({
  selector: 'app-sendtoken',
  templateUrl: './sendtoken.page.html',
  styleUrls: ['./sendtoken.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SendtokenPage implements OnInit {

  mytoken:any={};
  tokenusd:any="";

  swap:any={
    'swapFrom':'',
    'returnAmt':0
  };


  valueInput:any="";
  inputType;
 
  recipientaddr:any="";
  successflag=false;

  constructor(private http: HttpClient,private route: ActivatedRoute,public router:RouterService,private wallet:WalletsService,public noti:NotiService,private cd:ChangeDetectorRef) { }
  
max(){
  if(this.inputType==this.mytoken.symbol){
    this.valueInput=this.mytoken.coinbalance
    this.swapFunc(this.valueInput)
  }else if(this.inputType=='USD'){
    this.valueInput=this.mytoken.usdbalance
    this.swapFunc(this.valueInput)
  }


}

 numberize(x,num?) {
   let rx;
   if(num){
    rx=x.toFixed(num);
   }else{
   rx=x.toFixed(2);
   }
   
    return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


async switchType(){

if(this.inputType==this.mytoken.symbol){
this.inputType='USD'
this.valueInput=0;
this.swapFunc(this.valueInput);
}else if(this.inputType=='USD'){
this.inputType=this.mytoken.symbol
this.valueInput=0;
this.swapFunc(this.valueInput);
}
}

 measureValue(){

  

  if(this.inputType=='USD'){
    let balance=this.mytoken.usdbalance
    if(this.valueInput > balance || this.valueInput==0){
      return false;
    }else{
      return true;
    }
  }else if(this.inputType==this.mytoken.symbol){
    let balance=this.mytoken.coinbalance

    if(this.valueInput > balance || this.valueInput==0){
      return false;
    }else{
      return true;
    }
  }


}

  async swapFunc(value){

    if(isNaN(value)){
this.noti.notify('error','Invalid Input','Only numbers are allowed');
this.successflag=false;
console.log("Not a number")
    }else{

      if(this.tokenusd){

        if(this.inputType=='USD'){
        
          let usdAmt=await (value / this.tokenusd);
  
          this.swap.swapFrom=this.inputType
          this.swap.returnAmt=usdAmt
  
        }else if(this.inputType==this.mytoken.symbol){
          
            let coinAmt=await ( value*this.tokenusd );
    
            this.swap.swapFrom=this.inputType
            this.swap.returnAmt=coinAmt
  
            
  
        }
        
      
    }

      if(this.measureValue()==false){
        this.successflag=false;
        this.noti.notify('error','Insufficient balance!')
      }else{
  this.successflag=true;
      }

    }
    
    
    }


 async pasteAddress(){

  const { type, value } = await Clipboard.read();

  this.recipientaddr=value;


  }

  async syncToken(){
    const routeParams = this.route.snapshot.paramMap;
    let tkname=routeParams.get('name');
    let tktype=routeParams.get('type');
  let procv=await this.wallet.searchMyTokens(tkname,tktype)
 
    if(procv===true){
      this.mytoken=await this.wallet.getToken(tkname,tktype);
    }else{
      this.mytoken=await this.wallet.getAToken(tkname,tktype);
    }

    this.inputType=this.mytoken.symbol
  }

  async syncTokenPrice(){

    await this.wallet.getTokenPrice(this.mytoken.symbol).then(async (value)=>{
      this.tokenusd=value;
    await this.wallet.updateToken(this.mytoken.name,this.mytoken.type,{'usdprice':this.tokenusd});
      console.log(value+" Loaded from market");
    })
    .catch(async (error)=>{

      let prt:any=this.mytoken.usdprice

      if(!prt){
this.noti.notify('error',"Couldn't load resources","Check internet connection!");
      }else{
  this.tokenusd=prt;
  console.log(this.tokenusd+" Loaded from memory");
      }


    })
  }



  async ngOnInit() {
   
await this.syncToken().then(async (value)=>{
  await this.syncTokenPrice();
})

  }

}
