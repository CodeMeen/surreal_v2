import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { EventsService } from '../events.service';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  

  
  constructor(private router: RouterService,private routerOutlet: IonRouterOutlet,private events:EventsService) { }

 

  async ngOnInit() {
    this.routerOutlet.swipeGesture = false;
  }

  async ionViewDidEnter() {
    this.events.publish('UpdateHome')
    this.routerOutlet.swipeGesture = false;
}


}
