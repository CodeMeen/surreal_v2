import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
import { WalletsService } from '../wallets.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  
  panelmode;
  
  constructor(public router:Router,private routerOutlet: IonRouterOutlet,public events:EventsService,public wallet: WalletsService) { }

  async ngOnInit() {
   

    this.routerOutlet.swipeGesture = false;
    let currenturl=this.router.url

    if(currenturl.search('/account/menu') > -1){
this.panelmode='light';
    }else{
this.panelmode='light';
    }

   
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = false;
}


}
