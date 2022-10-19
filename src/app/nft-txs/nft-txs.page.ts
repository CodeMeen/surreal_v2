import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";

@Component({
  selector: 'app-nft-txs',
  templateUrl: './nft-txs.page.html',
  styleUrls: ['./nft-txs.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NftTxsPage implements OnInit {

  txs: any = [];
  nftname:any;

  constructor(  public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService,
    private route: ActivatedRoute) { }

 async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;

    let contractaddr = routeParams.get("contractaddr");
    this.nftname = routeParams.get("name");

    this.txs=await this.wallet.getNftTxs(contractaddr)
    
  }

}
