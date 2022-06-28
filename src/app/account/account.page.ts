import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountPage implements OnInit {

  
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private routerOutlet: IonRouterOutlet) { }

 

  async ngOnInit() {
    this.routerOutlet.swipeGesture = false;
  }


}
