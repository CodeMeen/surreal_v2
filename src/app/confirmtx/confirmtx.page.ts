import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-confirmtx',
  templateUrl: './confirmtx.page.html',
  styleUrls: ['./confirmtx.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ConfirmtxPage implements OnInit {

  txdata:any
  refinedTxData:any={}


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService) { }


  async reducenumber(num, fixed) {

    let string = await num.toString()

    if (!fixed) {

        if (string.length <= 11) {
            return string
        } else {
            let trimmedString = await string.slice(0, 11);
            return trimmedString
        }

    } else {
        if (string.length <= fixed) {
            return string
        } else {
            let trimmedString = await string.slice(0, fixed);
            return trimmedString
        }
    }

}
  async refineTx(tx){
  this.refinedTxData=tx
 
  this.refinedTxData['networkFee']=await this.reducenumber(tx.networkFee,7);


  let amountUsd=await (tx.amount * tx.token.usdprice)
  this.refinedTxData['amountUsd']=await this.reducenumber(amountUsd,7)


  let netfeevalueusd=await this.wallet.gasFeeUsd(tx.token.name,tx.token.type,tx.networkFee)
  this.refinedTxData['networkFeeUsd']=await this.reducenumber(netfeevalueusd,7)


  console.log(this.refinedTxData)

  }


 async ngOnInit() {

    this.txdata=this.wallet.readViewData('confirmTxdata')

if(!this.txdata ){
  this.router.goBack()
}else{
  await this.refineTx(this.txdata)
}
  }



}
