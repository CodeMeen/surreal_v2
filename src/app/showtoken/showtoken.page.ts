import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";

@Component({
  selector: "app-showtoken",
  templateUrl: "./showtoken.page.html",
  styleUrls: ["./showtoken.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ShowtokenPage implements OnInit {
  tokendetail: any = {};
  txloading: any = false;

  mytoken: any = {};
  txs: any = [];
  pendingTxs: any = [];

  updateEvent:any

  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService
  ) {}

  async updateView() {
    this.routerOutlet.swipeGesture = true;
    const routeParams = this.route.snapshot.paramMap;

    let tkname = routeParams.get("name");
    let tktype = routeParams.get("type");


    let previousbalance=this.mytoken.coinbalance
    let newtoken=await this.wallet.getToken(tkname, tktype);
    let currentbalance=newtoken.coinbalance

    if(previousbalance != currentbalance) {
      
    }
   

    this.mytoken = await this.wallet.getToken(tkname, tktype);



    console.log("update show token");
    
  }

  numberize(x, nocomma?, num?) {
    let rx;
    if (num) {
      rx = x.toFixed(num);
    } else {
      rx = x.toFixed(2);
    }

    if (nocomma === true) {
      return rx.toString();
    } else if (nocomma == false || !nocomma) {
      return rx.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  async showTx(tx) {
    await this.wallet.passViewData("txdata", tx).then(() => {
      this.wallet.passViewData("mytoken", this.mytoken).then(() => {
        this.router.naviTo(["/tx"]);
      });
    });
  }

  async ngOnInit() {
    this.routerOutlet.swipeGesture = true;
    const routeParams = this.route.snapshot.paramMap;

    let tkname = routeParams.get("name");
    let tktype = routeParams.get("type");

    this.mytoken = await this.wallet.getToken(tkname, tktype);
    this.pendingTxs = this.mytoken.pendingTxs;

    await this.wallet.getTxs(this.mytoken).then(async (value: any) => {
      this.txs = value;
      let hashToRemove = [];

      for (let index = 0; index < this.pendingTxs.length; index++) {
        const eachPendingTx = this.pendingTxs[index];

        let searchPending = await value.filter(
          (el) => el.hash == eachPendingTx.hash
        );
        let eachpend = searchPending[0];

        if (eachpend) {
          hashToRemove.push(eachpend.hash);
        }
      }

      await this.wallet.removePendingTx(
        this.mytoken.name,
        this.mytoken.type,
        hashToRemove
      );
    });

   
  }

  ionViewWillEnter(){
    this.updateEvent=this.events.getData()
    
    this.updateEvent.subscribe(async (data) => {
      if (data == "UpdatePages") {
        this.updateView();
      }
    });
  }


  ionViewWillLeave(){
    this.updateEvent.unsubscribe();
  }


  ngOnDestroy() {
  
  }
}
