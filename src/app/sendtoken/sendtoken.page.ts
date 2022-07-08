import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Clipboard } from '@capacitor/clipboard';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sendtoken',
  templateUrl: './sendtoken.page.html',
  styleUrls: ['./sendtoken.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SendtokenPage implements OnInit {

  mytoken:any={};
  recipientaddr="";

  constructor(private http: HttpClient,private route: ActivatedRoute,public router:RouterService,private wallet:WalletsService) { }

 async pasteAddress(){

  const { type, value } = await Clipboard.read();

  this.recipientaddr=value;


  }


  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;


    let tkname=routeParams.get('name');
    let tktype=routeParams.get('type');

    this.mytoken=await this.wallet.getAToken(tkname,tktype);

   let tokenurl="http://localhost:3000/getTokenData/symbol/"+this.mytoken.symbol

    this.http.get(tokenurl).subscribe(value=>{
console.log(value)
    },
    error=>{
console.log(error)
    });


  }

}
