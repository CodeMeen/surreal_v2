import { Component} from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})




export class AppComponent {
  private initPlugin: boolean;
  constructor(
    private platform: Platform,
  
  ) {

/*
    this.platform.ready().then(async () => {
      this.platform.backButton.subscribeWithPriority(
        666666, () => {
          App.exitApp();
        });

      })

      */



  
  
 
}




}
