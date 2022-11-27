import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";


@Component({
  selector: 'app-airdrop',
  templateUrl: './airdrop.page.html',
  styleUrls: ['./airdrop.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AirdropPage implements OnInit {

  reloading=true;
 
  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService
  ) {}

  async reloadFunc(){

  }

  
  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('Entering AirDrop..')
    this.reloading=true
    this.reloadFunc()
  }


  ionViewWillLeave(){
    console.log('Leaving Airdrop..')
    this.reloading=false
  }


  ngOnDestroy() {
  this.reloading=false
  console.log("Left Airdrop")
  }

}
