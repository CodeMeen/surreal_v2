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
  selector: 'app-exportwallet',
  templateUrl: './exportwallet.page.html',
  styleUrls: ['./exportwallet.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ExportwalletPage implements OnInit {
  exportinfo={
    'walletType':'',
    'mnemonicPhrase':'',
    'privateKey':'',
    'airdroptype':false
  }

  mywallet:any;

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    async startfunc(){
      const routeParams = this.route.snapshot.paramMap;

      let walletid = routeParams.get("walletid");



      let mywallet=await this.wallet.getMyWallet(walletid);
      this.mywallet=mywallet
     
      if(mywallet.mnemonic != '' && mywallet.privatekey !='' ){
       this.exportinfo.walletType='Mnemonic'
       this.exportinfo.mnemonicPhrase=mywallet.mnemonic.split(" ")

       if(mywallet.mnemonic=='airdrop'){
        this.exportinfo.airdroptype=true
       }else{
        this.exportinfo.airdroptype=false
       }
       
              }else if(mywallet.mnemonic != '' && mywallet.private == ''){
               this.exportinfo.walletType='Mnemonic'
               this.exportinfo.mnemonicPhrase=mywallet.mnemonic.split("")

               if(mywallet.mnemonic=='airdrop'){
                this.exportinfo.airdroptype=true
               }else{
                this.exportinfo.airdroptype=false
               }
               
              }else if(mywallet.mnemonic == '' && mywallet.private != ''){
               this.exportinfo.walletType='Private Key'
               this.exportinfo.privateKey=mywallet.privatekey
              }
   
     }


     async copyKey(){
     let  mywallet=this.mywallet
     
      if(mywallet.mnemonic != '' && mywallet.privatekey !='' ){

        await Clipboard.write({
          string:  this.mywallet.mnemonic
        });

        this.noti.notify('success','Copied!');
     
              }else if(mywallet.mnemonic != '' && mywallet.private == ''){

                await Clipboard.write({
                  string:  this.mywallet.mnemonic
                });

                this.noti.notify('success','Copied!');
        
              }else if(mywallet.mnemonic == '' && mywallet.private != ''){

                await Clipboard.write({
                  string:this.mywallet.privatekey
                });

                this.noti.notify('success','Copied!');

              }
     }


     async ionViewDidEnter() {
    
      this.routerOutlet.swipeGesture = true;
    }

    

  async ngOnInit() {
    await this.startfunc()
  }

}
