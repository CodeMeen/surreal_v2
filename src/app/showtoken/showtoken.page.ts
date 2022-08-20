import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-showtoken',
  templateUrl: './showtoken.page.html',
  styleUrls: ['./showtoken.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ShowtokenPage implements OnInit {

 tokendetail:any={};

 mytoken:any={};
 txs:any=[]

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService) { }

  numberize(x,nocomma?,num?) {
    let rx;
    if(num){
     rx=x.toFixed(num);
    }else{
    rx=x.toFixed(2);
    }

    if(nocomma===true){
return rx.toString();
    }else if(nocomma==false || !nocomma){
      return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    
     
 }


 async ngOnInit() {
    this.routerOutlet.swipeGesture = true;
const routeParams = this.route.snapshot.paramMap;


let tkname=routeParams.get('name');
let tktype=routeParams.get('type');

this.mytoken=await this.wallet.getToken(tkname,tktype);


this.txs=await this.wallet.getTxs(this.mytoken)

  }

}
