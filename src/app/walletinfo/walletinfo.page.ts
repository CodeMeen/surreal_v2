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

  checknameflag=false;

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

    async deletePop(walletid){
      const signupmessage = {
        type: 'message',
        height: 'maxi',
        transparent: true,
        message: 'This wallet will be removed,Make sure this wallet is backed up before proceeding,you will lose access to your funds if wallet is not backed up',
        messagetitle: 'Remove Wallet',
        messageimg: true,
        messageimgurl: '../../assets/images/removewallet.png',
        messageactions: true,
        actionname: 'Remove'
      };

     let confirmfunc= ()=>{
    this.popup.close()
 this.wallet.removeWallet(walletid)
 this.router.naviTo(['/account','settings'])
     }

      this.popup.initpopup(signupmessage, confirmfunc);
    }


    async checkWalletName(){
     
      
      let normalname=this.thewallet.name
    
      let inputname=this.createData.walletname

      if(inputname != normalname){
this.checknameflag=true
      }else{
this.checknameflag=false
      }
      
    }

    async savewalletname(){
      const routeParams = this.route.snapshot.paramMap;
      let walletid = routeParams.get("walletid");

      let data={
        name:'name',
        value:this.createData.walletname
      }

this.wallet.writeToMyWallet(data,walletid)

this.noti.notify('success','Saved!')

    }

    async ionViewDidEnter() {
    
      this.routerOutlet.swipeGesture = true;
    }

  async ngOnInit() {
await this.startfunc()
  }


}
