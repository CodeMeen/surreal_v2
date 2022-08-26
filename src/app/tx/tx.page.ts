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

  txdata:any
  refinedTxData:any={}
  mytoken:any={}

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService) { }

  async refineTx(tx){
  this.refinedTxData=tx
  this.refinedTxData['refinedDate']=this.timeConverter(tx.timeStamp)
  this.refinedTxData['gasFee']=this.getTxFee(tx.gasUsed,tx.gasPrice)
  this.refinedTxData['gasFeeUsd']=await this.wallet.gasFeeUsd(this.mytoken.name,this.mytoken.type,tx.gasFee)


  console.log(this.refinedTxData)

  }

  getTxFee(gasused,gasprice){
  let data=gasused*gasprice
  let newdat=data/1000000000000000000
  return newdat
  }

  timeConverter(UNIX_timestamp){

    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  async ngOnInit() {

this.mytoken=this.wallet.readViewData('mytoken')
this.txdata=this.wallet.readViewData('txdata')

console.log(this.mytoken)

if(!this.txdata || !this.mytoken){
  this.router.goBack()
}else{
  await this.refineTx(this.txdata)
}


  }

}
