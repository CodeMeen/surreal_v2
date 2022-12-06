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

  inputflag=false


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }


    async oninput(){
      let str=this.importData.pk

      let lenghtostr=str.length;

      if(lenghtostr < 64){
this.inputflag=false
      }else{
this.inputflag=true
      }

    }


    async confirmImport(){
    
      if(this.inputflag==true){
        await this.wallet.importPrivatekeyWallet(this.importData).then((data)=>{
      if(data==true){
        this.wallet.reloadFunc()
       this.router.naviTo(['/account/settings'])
      this.noti.notify('success','Wallet Imported Succesfully');
        
      }
        })
      }

    }

   

    async setWalletName(){
    
      await this.wallet.newWalletId().then((value)=>{
        let newName=`Wallet ${value}`
        this.importData.walletname=newName
      })
    }

    async ionViewDidEnter() {
    
      this.routerOutlet.swipeGesture = true;
    }

  async ngOnInit() {
    await this.setWalletName()
  }

}
