import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.page.html',
  styleUrls: ['./new-wallet.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NewWalletPage implements OnInit {


  importData={
    walletname:'Main Wallet Two',
    phrase:''
  }

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }




  async confirm(){

  }

  ngOnInit() {
  }

}
