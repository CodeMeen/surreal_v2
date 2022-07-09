import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  tokenusd:any;
  recipientaddr="";

  constructor(private http: HttpClient,private route: ActivatedRoute,public router:RouterService,private wallet:WalletsService,public noti:NotiService) { }

 async pasteAddress(){

  const { type, value } = await Clipboard.read();

  this.recipientaddr=value;


  }

  async syncToken(){
    const routeParams = this.route.snapshot.paramMap;
    let tkname=routeParams.get('name');
    let tktype=routeParams.get('type');
    this.mytoken=await this.wallet.getAToken(tkname,tktype);
    console.log(this.mytoken);
  }

  async syncTokenPrice(){

    this.wallet.getTokenPrice(this.mytoken.symbol).then((value)=>{
      this.tokenusd=value;
      this.wallet.updateToken(this.mytoken.name,this.mytoken.type,{'usdprice':this.tokenusd});
      console.log(value);
    })
    .catch((error)=>{
     this.syncToken();

      let prt:any=this.mytoken.usdprice
console.log(prt);
      if(!prt){
this.noti.notify('error',"Couldn't load resources","Check internet connection!");
      }else{
  this.tokenusd=prt;
      }


    })
  }

  async ngOnInit() {
   
this.syncToken();
this.syncTokenPrice();

  }

}
