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


  refinedTxData?:any={
    'token':{},
     'eligibility':{},
     'baseChain':{}
  }


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

async confirmTx(){

  if(this.refinedTxData.eligibility.status==true){

  }else{
    this.router.naviTo(['/receivetoken',this.refinedTxData.baseChain.name,this.refinedTxData.baseChain.type])
  }

}

  async refineTx(tx){
  this.refinedTxData=tx
 
  this.refinedTxData['networkFee']=await this.reducenumber(tx.networkFee,7);


  let amountUsd=await (tx.amount * tx.token.usdprice)
  this.refinedTxData['amountUsd']=await this.reducenumber(amountUsd,7)

  this.refinedTxData['amount']=await this.reducenumber(tx.amount,11)


  let netfeevalueusd=await this.wallet.gasFeeUsd(tx.token.name,tx.token.type,tx.networkFee)
  this.refinedTxData['networkFeeUsd']=await this.reducenumber(netfeevalueusd,7)

  this.refinedTxData['maxTotal']=await this.reducenumber(tx.maxTotal,9)

  let maxtotalvalueusd=await this.wallet.gasFeeUsd(tx.token.name,tx.token.type,tx.maxTotal)
  this.refinedTxData['maxTotalUsd']=await this.reducenumber(maxtotalvalueusd,7)

  this.refinedTxData['baseChain']=await this.wallet.tokenBaseChain(tx.token.name,tx.token.type)


  console.log(this.refinedTxData)

  }


 async ngOnInit() {

  
    await this.wallet.readViewData('confirmTxdata').then((data)=>{

      if(!data ){
        this.router.goBack()
      }else{
        this.refineTx(data)
      }

    })

  }



}


