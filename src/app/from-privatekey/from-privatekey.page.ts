import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-from-privatekey',
  templateUrl: './from-privatekey.page.html',
  styleUrls: ['./from-privatekey.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FromPrivatekeyPage implements OnInit {

  importData={
    walletname:'Main Wallet Two',
    pk:''
  }

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    async import(){

    }

  ngOnInit() {
  }

}
