import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotiService } from '../noti.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-receivetoken',
  templateUrl: './receivetoken.page.html',
  styleUrls: ['./receivetoken.page.scss'],
})
export class ReceivetokenPage implements OnInit {

  mytoken:any={};

  qrInfo;


  constructor(private http: HttpClient,private route: ActivatedRoute,public router:RouterService,private wallet:WalletsService,public noti:NotiService) { }

  async copyAddr(){
    await Clipboard.write({
      string: this.mytoken.publickey
    });

    this.noti.notify('success','Copied!');
  }


  async syncToken(){
    const routeParams = this.route.snapshot.paramMap;
    let tkname=routeParams.get('name');
    let tktype=routeParams.get('type');
  let procv=await this.wallet.searchMyTokens(tkname,tktype)
 
    if(procv===true){
      this.mytoken=await this.wallet.getToken(tkname,tktype);
    }else{
      this.mytoken=await this.wallet.getAToken(tkname,tktype,true); 
    }

    this.qrInfo=this.mytoken.publickey;

  }

  async ngOnInit() {
    await this.syncToken();
  }

}
