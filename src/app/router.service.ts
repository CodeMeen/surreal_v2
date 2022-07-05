import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private navCtrl: NavController,private zone: NgZone ,private router: Router) { }

  goTo(comp, param?){

    if(!param){
      this.zone.run(()=>{
        this.router.navigate([comp]);
        });
    }else{
      this.zone.run(()=>{
        this.router.navigate([comp,param]);
        });
    }
    
  }
    

  goBack(){
    this.zone.run(() => {
      this.navCtrl.back();
  });
  }

  goBackHome(){
    this.zone.run(() => {
      this.navCtrl.setDirection('back');
      this.router.navigate(['/account', 'wallet']);
      console.log("Triggered");
  });
  }
}
