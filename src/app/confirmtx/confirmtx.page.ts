import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { PopupService } from '../popup.service';



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


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService,public popup: PopupService) { }


 

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

    await this.wallet.sendTx(this.refinedTxData).then(async (value:any)=>{
      let pendingTx=value.result
    
     await this.wallet.passViewData('txdata',pendingTx).then(()=>{
      
    

      this.wallet.passViewData('mytoken',this.refinedTxData.token).then(()=>{
        this.wallet.addPendingTx(this.refinedTxData.token.name,this.refinedTxData.token.type,pendingTx)
        this.router.naviTo(['/tx'])
      })

       
      })

    })

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


  let maxtotalvalueusd=tx.maxTotal * tx.token.usdprice
  this.refinedTxData['maxTotalUsd']=await this.reducenumber(maxtotalvalueusd,7)

  this.refinedTxData['baseChain']=await this.wallet.tokenBaseChain(tx.token.name,tx.token.type)



  if(this.refinedTxData.eligibility.status==false && this.refinedTxData.eligibility.reason=='low_network_fees' ){
    const message = {
      type: 'message',
      height: 'mini',
      transparent: true,
      message: `You dont have enough ${this.refinedTxData.baseChain.name} (${this.refinedTxData.baseChain.symbol}) to cover ${this.refinedTxData.networkFee} ${this.refinedTxData.baseChain.symbol} ($${this.refinedTxData.networkFeeUsd}) network fees`,
      messagetitle: "Insufficient Gas Fee",
      messageimg: true,
      messageimgurl: '../../assets/images/rederror.png',
      messageactions: true,
      actionname: 'Top Up ETH'
  };
  
  let confirmfunc=async ()=>{
  this.popup.close()
  this.router.naviTo(['/receivetoken',this.refinedTxData.baseChain.name,this.refinedTxData.baseChain.type])
  }
  
    this.popup.initpopup(message,confirmfunc);
  
  }

  console.log(this.refinedTxData)

  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
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


