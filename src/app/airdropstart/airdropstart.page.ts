import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { EventsService } from '../events.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from "../router.service";
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-airdropstart',
  templateUrl: './airdropstart.page.html',
  styleUrls: ['./airdropstart.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AirdropstartPage implements OnInit {


  countDownDate;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  countdown:any;

  constructor(public wallet: WalletsService,private events:EventsService, public noti:NotiService, public popup: PopupService,public router: RouterService, private routerOutlet: IonRouterOutlet, ) { }


  myfunc = setInterval(async ()=> {

    var now = new Date().getTime();
    var timeleft = this.countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
  this.days= days + " d "
  this.hours= hours + " h "
  this.minutes = minutes + " m "
  this.seconds = seconds + " s "

   this.countdown = true;
 

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(this.myfunc);

        this.countdown = !this.countdown;

    }
}, 1000);


async startFunc(){
  let airdropsettings:any=await this.wallet.getAppSettings();
  let airdrop_metadata=airdropsettings.airdrop_metadata


  this.countDownDate=new Date(airdrop_metadata.airdrop_expiry_date).getTime();
}

startAirdrop(){
  this.router.naviTo(['/startairdroprefcode'])

}

async ionViewDidEnter() {
    
  this.routerOutlet.swipeGesture = true;
}


  ngOnInit() {
    this.startFunc()
  }

}
