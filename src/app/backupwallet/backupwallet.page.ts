import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-backupwallet',
  templateUrl: './backupwallet.page.html',
  styleUrls: ['./backupwallet.page.scss'],
})
export class BackupwalletPage implements OnInit {

  walletMnemonic:any;
  wordsArray:any;

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }


    async startfunc(){
      const routeParams = this.route.snapshot.paramMap;

      let walletid = routeParams.get("walletid");
  
      if(!walletid){
  this.router.naviTo(['/account']);
      }else{
        this.walletMnemonic=await this.wallet.getWalletMnemonic(walletid)
        let words = this.walletMnemonic.split(" ");
        this.wordsArray=words
      }
    }
    

  async ngOnInit() {
  await this.startfunc();
}

}
