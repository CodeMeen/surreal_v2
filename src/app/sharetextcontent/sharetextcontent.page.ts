import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Share } from "@capacitor/share";
import { NotiService } from "../noti.service";
import { Clipboard } from "@capacitor/clipboard";
import { Browser } from "@capacitor/browser";
import { PopupService } from "../popup.service";
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-sharetextcontent',
  templateUrl: './sharetextcontent.page.html',
  styleUrls: ['./sharetextcontent.page.scss'],
})
export class SharetextcontentPage implements OnInit {
airdrop: any = {}
  constructor(  
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    private noti: NotiService,
    public popup: PopupService) { }

  ngOnInit() {
   
  }

  async startFunc(){
    let airdrop
    this.airdrop=await this.wallet.getAirdrop();
    console.log(this.airdrop)
  }

  async ionViewWillEnter() {
    console.log("Entering Share referral info..");
    await this.startFunc();
  }


  async shareText(){

    let message=this.airdrop.shareMessage



         let sd:any=await Share.canShare()
         console.log(sd)
      
          await Clipboard.write({
            string:message
          });
      
          this.noti.notify('success','Copied!','Paste your referral info to your friends');

          if(sd.value==false){
      
         }else{

          await Share.share({
            title: 'Earn from App Lauch Giveaway/Airdrop',
            text: message,
            dialogTitle: 'Share with Friends',
          });
         }
      
  }

}
