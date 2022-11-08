import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-walletinfo',
  templateUrl: './walletinfo.page.html',
  styleUrls: ['./walletinfo.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WalletinfoPage implements OnInit {

  thewallet:any;
  createData:any={ 
    'walletname':''
  }

  info:any={
    'walletType':'',
    'walletid':''
  }

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }


    async startfunc(){
      const routeParams = this.route.snapshot.paramMap;
      let walletid = routeParams.get("walletid");

      this.info.walletid=walletid

      this.thewallet=await this.wallet.getMyWallet(walletid)


      this.createData.walletname=this.thewallet.name

      if(this.thewallet.mnemonic != '' && this.thewallet.privatekey !='' ){
this.info.walletType='Mnemonic'
      }else if(this.thewallet.mnemonic != '' && this.thewallet.private == ''){
        this.info.walletType='Mnemonic'
      }else if(this.thewallet.mnemonic == '' && this.thewallet.private != ''){
        this.info.walletType='Private Key'
      }


    }

  async ngOnInit() {
await this.startfunc()
  }


}
