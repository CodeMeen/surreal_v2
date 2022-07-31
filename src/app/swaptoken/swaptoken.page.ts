import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-swaptoken',
  templateUrl: './swaptoken.page.html',
  styleUrls: ['./swaptoken.page.scss'],
})
export class SwaptokenPage implements OnInit {

  youpayvalue=0;

  fromtoken:any;
  totoken:any;

  constructor(public wallet: WalletsService,private events:EventsService) { }

  async syncToken(){
this.fromtoken=await this.wallet.getMyTokens();
this.totoken=await this.wallet.getAToken('Dai','ERC20');

console.log(this.fromtoken)
console.log(this.totoken)
  }


async ngOnInit() {
await this.syncToken();
  }

}
