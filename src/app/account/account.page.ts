import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  
  panelmode;

  
  constructor(private router:Router,private routerOutlet: IonRouterOutlet,private events:EventsService) { }

 

  async ngOnInit() {
    this.routerOutlet.swipeGesture = false;

    if(this.router.url=='/account/swaptoken'){
this.panelmode='dark';
    }else{
this.panelmode='light';
    }

   
  }

  async ionViewDidEnter() {
    this.events.publish('UpdateHome')
    this.routerOutlet.swipeGesture = false;
}


}
