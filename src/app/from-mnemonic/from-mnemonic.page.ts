import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-from-mnemonic',
  templateUrl: './from-mnemonic.page.html',
  styleUrls: ['./from-mnemonic.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FromMnemonicPage implements OnInit {
   
  importData={
    walletname:'',
    phrase:''
  }

  inputflag=false

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    async import(){

    }

    async oninput(){
      let str=this.importData.phrase

      let lenghtostr=str.split(' ').length;

      if(lenghtostr < 3){
this.inputflag=false
      }else{
this.inputflag=true
      }

    }



    async setWalletName(){
    
      await this.wallet.newWalletId().then((value)=>{
        let newName=`Wallet ${value}`
        this.importData.walletname=newName
      })
    }

  async ngOnInit() {

    await this.setWalletName()

  }

}
