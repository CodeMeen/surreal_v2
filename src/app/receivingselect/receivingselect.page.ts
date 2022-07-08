import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-receivingselect',
  templateUrl: './receivingselect.page.html',
  styleUrls: ['./receivingselect.page.scss'],
})
export class ReceivingselectPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.routerOutlet.swipeGesture = true;
  }

}
