import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { EventsService } from '../events.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from "../router.service";

@Component({
  selector: 'app-airdropstart',
  templateUrl: './airdropstart.page.html',
  styleUrls: ['./airdropstart.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AirdropstartPage implements OnInit {

  constructor(public wallet: WalletsService,private events:EventsService, public noti:NotiService, public popup: PopupService,public router: RouterService ) { }

  ngOnInit() {
  }

}
