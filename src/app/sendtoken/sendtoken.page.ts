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

  

  tokenusd:any=null;
  swap:any={
    'swapFrom':'coin',
    'returnAmt':0
  };

  valueInput:any;
  inputType='coin';



 
  recipientaddr="";

  constructor(private http: HttpClient,private route: ActivatedRoute,public router:RouterService,private wallet:WalletsService,public noti:NotiService,private cd:ChangeDetectorRef) { }
  
 numberize(x) {
   let rx=x.toFixed(2);
    return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


  async swapFunc(value){

    if(isNaN(value)){

    }

    if(this.tokenusd){

    
      if(this.inputType=='coin'){
      
        let usdAmt=await (this.tokenusd * value);

        this.swap.swapFrom=this.inputType
        this.swap.returnAmt=usdAmt

        this.cd.detectChanges();
         
  
      }else if(this.inputType=='usd'){
        
          let coinAmt=await (this.tokenusd / value);
  
          this.swap.swapFrom=this.inputType
          this.swap.returnAmt=coinAmt

          this.cd.detectChanges();

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
