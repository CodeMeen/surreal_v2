import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Browser } from "@capacitor/browser";
import { Clipboard } from "@capacitor/clipboard";
import { NotiService } from "../noti.service";

@Component({
  selector: "app-tx",
  templateUrl: "./tx.page.html",
  styleUrls: ["./tx.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TxPage implements OnInit {
  txdata: any;
  refinedTxData: any = {};
  mytoken: any = {};

  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService, 
    public noti: NotiService
  ) {}
  async copyStr(text) {
    await Clipboard.write({
      string: text,
    });

    this.noti.notify("success", "Copied!");
  }


  async reducenumber(num, fixed) {
    let string = await num.toString();

    if (!fixed) {
      if (string.length <= 11) {
        return string;
      } else {
        let trimmedString = await string.slice(0, 11);
        return trimmedString;
      }
    } else {
      if (string.length <= fixed) {
        return string;
      } else {
        let trimmedString = await string.slice(0, fixed);
        return trimmedString;
      }
    }
  }
  async refineTx(tx) {
    this.refinedTxData = tx;
    this.refinedTxData["refinedDate"] = this.timeConverter(tx.timeStamp);
    let gasFee = this.getTxFee(tx.gasUsed, tx.gasPrice);
    this.refinedTxData["gasFee"] = await this.reducenumber(gasFee, 7);

    let gasFeeusd = await this.wallet.gasFeeUsd(
      this.mytoken.name,
      this.mytoken.type,
      tx.gasFee
    );
    this.refinedTxData["gasFeeUsd"] = await this.reducenumber(gasFeeusd, 5);

    let tokenvalueusd = await (tx.tokenvalue * this.mytoken.usdprice);
    this.refinedTxData["tokenvalueusd"] = await this.reducenumber(
      tokenvalueusd,
      11
    );

    console.log(this.refinedTxData);
  }

  getTxFee(gasused, gasprice) {
    let data = gasused * gasprice;
    let newdat = data / 1000000000000000000;
    return newdat;
  }

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  async goToExplorer(hash) {
    let network = await this.wallet.getCurrentNetworkName(),
      mapurl;

    if (network == "mainnet") {
      mapurl = `https://etherscan.io/tx/${hash}`;
    } else {
      mapurl = `https://${network}.etherscan.io/tx/${hash}`;
    }

    await Browser.open({ url: mapurl });
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
  }

  async ngOnInit() {
    this.mytoken = await this.wallet.readViewData("mytoken");
    this.txdata = await this.wallet.readViewData("txdata");

    console.log(this.mytoken);

    if (!this.txdata || !this.mytoken) {
      this.router.goBack();
    } else {
      await this.refineTx(this.txdata);
    }
  }
}
