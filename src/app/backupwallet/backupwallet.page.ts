import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-backupwallet',
  templateUrl: './backupwallet.page.html',
  styleUrls: ['./backupwallet.page.scss'],
  encapsulation:ViewEncapsulation.None
})

export class BackupwalletPage implements OnInit {

  walletMnemonic:any;
  wordsArray:any;
  walletId:any;

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }


    async startfunc(){
      const routeParams = this.route.snapshot.paramMap;

      let walletid = routeParams.get("walletid");
      this.walletId=walletid
  
      if(!walletid){
  this.router.naviTo(['/account']);
      }else{
        this.walletMnemonic=await this.wallet.getWalletMnemonic(walletid)
        let words = this.walletMnemonic.split(" ");
        this.wordsArray=words
      }
    }

    async copyPhrase(){
      await Clipboard.write({
        string: this.walletMnemonic
      });
  
      this.noti.notify('success','Copied!');
    }
    
    async ionViewDidEnter() {
    
      this.routerOutlet.swipeGesture = true;
    }
    

  async ngOnInit() {
  await this.startfunc();
}

}
