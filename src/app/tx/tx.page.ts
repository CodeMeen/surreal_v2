import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-tx',
  templateUrl: './tx.page.html',
  styleUrls: ['./tx.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TxPage implements OnInit {

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService) { }

  ngOnInit() {
  }

}
