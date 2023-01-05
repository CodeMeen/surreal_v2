import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { EventsService } from '../events.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from "../router.service";
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-swaptoken',
  templateUrl: './swaptoken.page.html',
  styleUrls: ['./swaptoken.page.scss'],
  encapsulation:ViewEncapsulation.None
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

  currentNetwork:any;

  constructor(public wallet: WalletsService,private events:EventsService,private routerOutlet: IonRouterOutlet, public noti:NotiService, public popup: PopupService,public router: RouterService ) { }

  numberize(x,nocomma?,num?) {
    let rx;
    if(num){
     rx=x.toFixed(num);
    }else{
    rx=x.toFixed(2);
    }

    if(nocomma===true){
return rx.toString();
    }else{
      return rx.toString();   
    }
    
     
 }

 async selectFromtoken(){
 

  let alltoken=await this.wallet.getAllTokens();
  let arr=[];

  for (let index = 0; index < alltoken.length; index++) {
    const eachobj = alltoken[index];
    let newobj={'listname':eachobj.name,'imgurl':eachobj.img || eachobj.logoURI,
    value:
    {'name':eachobj.name,'symbol':eachobj.symbol,
    'type':eachobj.type,
    'coinbalance':eachobj.coinbalance,
    'usdbalance':eachobj.usdbalance
  },
  'listid':index,
  'searchphrase':eachobj.symbol
    }

   arr.push(newobj);
   
  }

let selectinfo={
  type:'list',
  height:'maxi',
  search: true,
  listimg: true,
  transparent: true,
  lists: arr
  }

  let selectfunc=async (res)=>{
let tokenname=res.value.name
let tokentype=res.value.type
let tokensymbol=res.value.symbol
let searchh=await this.wallet.searchMyTokens(tokenname,tokentype)

if(searchh==true){
  this.fromtoken=await this.wallet.getToken(tokenname,tokentype) 
  this.popup.close()
}else{
  this.popup.close()
  this.fromtoken=await this.wallet.getAToken(tokenname,tokentype)
}


  
this.swap={
  'fromtokenusd':0,
  'totokenusd':0
}

  await this.syncTokenPrice('fromtoken')
  }

  this.popup.initpopup(selectinfo,selectfunc)

 }

 measureFromValue(){

  this.noti.closenoti();
  
    let balance=Number(this.fromtoken.coinbalance)
    let inputvalue=Number(this.fromtokenvalue)
   


    if(inputvalue > balance || inputvalue < 0){
      return false;
    }else{
      return true;
    }


}

 resetInput(){
  this.fromtokenvalue='';
  this.totokenvalue='';
 }

 async clickswap(){

  if(this.fromtokenvalue <= 0 || this.totokenvalue <= 0 || this.fromtokenusd <= 0 || this.totokenusd <= 0 || !this.fromtoken.name || !this.totoken.name || this.successflag==false){
  }else{

    if(this.currentNetwork != 'mainnet'){
      const tomorrowmessage = {
        type: 'message',
        height: 'maxi',
        transparent: true,
        message: 'Token swap is only available on the mainnet,switch network to ethereum mainnet to use token swap',
        messagetitle: 'Can not swap',
        messageimg: true,
        messageimgurl: '../../assets/images/attention.png',
        messageactions: true,
        actionname: 'Okay'
      };
  
     let confirmfunc= ()=>{
    this.popup.close()
     }
  
      this.popup.initpopup(tomorrowmessage, confirmfunc);
    }else{

      const tomorrowmessage = {
        type: 'message',
        height: 'maxi',
        transparent: true,
        message: 'An error occured during your request,please try again later!',
        messagetitle: 'An error occured',
        messageimg: true,
        messageimgurl: '../../assets/images/rederror.png',
        messageactions: true,
        actionname: 'Okay'
      };
  
     let confirmfunc= ()=>{
    this.popup.close()
     }
  
      this.popup.initpopup(tomorrowmessage, confirmfunc);

    }
    
  }


 }

 async selectTotoken(){
  let alltoken=await this.wallet.getAllTokens();
  let arr=[];

  for (let index = 0; index < alltoken.length; index++) {
    const eachobj = alltoken[index];
    let newobj={'listname':eachobj.name,'imgurl':eachobj.img || eachobj.logoURI,
    value:
    {'name':eachobj.name,'symbol':eachobj.symbol,
    'type':eachobj.type,
    'coinbalance':eachobj.coinbalance,
    'usdbalance':eachobj.usdbalance
  },
  'listid':index,
  'searchphrase':eachobj.symbol
}

arr.push(newobj);
   
  }

let selectinfo={
  type:'list',
  height:'maxi',
  search: true,
  listimg: true,
  transparent: true,
  lists: arr
  }

  let selectfunc=async (res)=>{
let tokenname=res.value.name
let tokentype=res.value.type
let tokensymbol=res.value.symbol

let searchh=await this.wallet.searchMyTokens(tokenname,tokentype)

if(searchh==true){
  this.totoken=await this.wallet.getToken(tokenname,tokentype) 
  this.popup.close()
}else{
  this.popup.close()
  this.totoken=await this.wallet.getAToken(tokenname,tokentype)
}
  
this.swap={
  'fromtokenusd':0,
  'totokenusd':0
}

await this.syncTokenPrice('totoken')
  }

  this.popup.initpopup(selectinfo,selectfunc)

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
                  this.totokenvalue=exctokenval;
  
                }

              }

            }else if(type=='totoken'){

              if(this.totokenusd > 0){


                let usdAmt=await (value * this.totokenusd);
                this.swap.totokenusd=usdAmt

                this.swap.fromtokenusd=usdAmt

                if(this.fromtokenusd > 0){
                  let exctokenval=await (usdAmt / this.fromtokenusd)
                  this.fromtokenvalue=exctokenval;
  
                }

              }


        
            }


            if(this.measureFromValue()==false){
              this.successflag=false;
              this.noti.notify('error','Insufficient balance!')
            }else{
        this.successflag=true;
            }
      



          }
  }

  async syncToken(){
this.fromtoken=(await this.wallet.getMyTokens())[0];

let currentNetwork=await this.wallet.getCurrentNetworkName()

this.currentNetwork=currentNetwork

if(currentNetwork=='mainnet'){
  this.totoken=await this.wallet.getAToken('Dai','ERC20');
}else{
  this.totoken=(await this.wallet.getMyTokens())[0];
}



  }

  async syncTokenPrice(type){

    if(type=="fromtoken"){

      await this.wallet.getTokenPrice(this.fromtoken.symbol,this.fromtoken).then(async (value: number)=>{
        this.fromtokenusd=value;
      await this.wallet.updateToken(this.fromtoken.name,this.fromtoken.type,{'usdprice':this.fromtokenusd});
        console.log(value+" Loaded from market");


        this.resetInput();
      })
      .catch(async (error)=>{
  
        let prt:any=this.fromtoken.usdprice
  
        if(!prt){
  this.noti.notify('error',"Couldn't load resources","Check internet connection!");
        }else{
    this.fromtokenusd=prt;
    console.log(this.fromtokenusd+" Loaded from memory");
        }
  
        this.resetInput()
      })

    }else if(type=='totoken'){

      await this.wallet.getTokenPrice(this.totoken.symbol,this.totoken).then(async (value: number)=>{
        this.totokenusd=value;
      await this.wallet.updateToken(this.totoken.name,this.totoken.type,{'usdprice':this.totokenusd});
        console.log(value+" Loaded from market");

        this.resetInput()
      })
      .catch(async (error)=>{
  
        let prt:any=this.totoken.usdprice
  
        if(!prt){
  this.noti.notify('error',"Couldn't load resources","Check internet connection!");
        }else{
    this.totokenusd=prt;
    console.log(this.totokenusd+" Loaded from memory");
        }
  

        this.resetInput()
  
      })

    }

  }



ionViewWillEnter(){
  
  /* this.events.getData().subscribe(async (data) => {
    if(data=="UpdateSwap"){
      await this.syncToken().then(async (value)=>{
        await this.syncTokenPrice('fromtoken')
        await this.syncTokenPrice('totoken')
        console.log('Swap Page Updated..')
      });
    }
}); */
    
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
  }

ngOnInit() {
  
this.syncToken().then(async (value)=>{
  await this.syncTokenPrice('fromtoken')
  await this.syncTokenPrice('totoken')
  console.log('Swap Page Updated..')
});
  }

}
