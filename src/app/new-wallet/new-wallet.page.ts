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


  createData={
    walletname:'',
  }



  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }




  async confirmImport(){
    
      if(this.createData.walletname != ''){
        await this.wallet.createNewWallet(this.createData).then((data:any)=>{
      if(data.status==true){
        this.wallet.reloadFunc()
        this.router.naviTo([`/backupwallet/${data.walletid}`])
        this.noti.notify('success','Wallet Created Succesfully','Backup your wallet to continue');
      }
        })
      }

    }


  async setWalletName(){
    
    await this.wallet.newWalletId().then((value)=>{
      let newName=`Wallet ${value}`
      this.createData.walletname=newName
    })
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
  }

async ngOnInit() {

  await this.setWalletName()

}

}
