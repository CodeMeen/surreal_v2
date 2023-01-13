import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-notis',
  templateUrl: './notis.page.html',
  styleUrls: ['./notis.page.scss'],
  encapsulation: ViewEncapsulation.None
})



export class NotisPage implements OnInit {
  app_notis:any[]=[]

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    async ionViewWillEnter(){
    await this.get_notis()
    }

    async get_notis(){
      let settings=await this.wallet.getAppSettings();
      this.app_notis=settings.app_notifications
    }

    async toggleview(id){
      let allnoti=this.app_notis

      let searched=allnoti.filter((data)=>{
        return data.id==id
      })
     
      searched[0].viewed=true

      let towrite={
        name: 'app_notifications',
        value: allnoti
      }

     await this.wallet.writeToAppSettings(towrite)
    }

  ngOnInit() {
  }

}
