import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { raw } from 'express';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Browser } from "@capacitor/browser";
import { FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  airdrop={
    'data':'',
    'can_start':''
  }

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

  async ngOnInit() {
    await this.startFunc();
  }

  async openLink(mapurl){
    await Browser.open({ url: mapurl }); 
  
  }

  async startFunc(){
    let airdrop, appsettings;

    airdrop=await this.wallet.getAirdrop();
    appsettings=await this.wallet.getAppSettings();

    this.airdrop.can_start=appsettings.airdrop_can_start
    

   
  }

}
