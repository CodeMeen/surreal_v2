import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { raw } from 'express';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Browser } from "@capacitor/browser";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SettingsPage implements OnInit {

 currentwallet:any={}
 noofwallets:any
 appSettings:any;

 reloading=true;

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    async openLink(mapurl){
      await Browser.open({ url: mapurl }); 

    }

async selectWallet(){
let arr=[]

let allWallet=await this.wallet.getAllWallet()

allWallet.forEach( async (el)=> {
  let eachdata= {'listname':el.name,'imgurl':'',
  value:el.id,
  'listid':el.id,
  'searchphrase':'Wallet',
  'selected':el.currentview,
  'othername': await this.wallet.getWalletPublicKey('ethereum',el.id)
}


arr.push(eachdata)

});

let walletsInfo={
  type:'list',
  height:'maxi',
  search: false,
  listimg: false,
  transparent: true,
  lists: arr,
  selectedValues:true,
  otherName:true,
  outactionname:'Add Wallet'
  }

  let selectfunc=async (res)=>{
    this.popup.close()
    let value=res.value

await this.wallet.selectWallet(value).then(async ()=>{
await this.wallet.reloadFunc()
this.updatePage()
this.router.naviTo(['account','wallet'])
this.noti.notify('success','Switched!');

})

  }

  let outsideaction=async (res)=>{
    this.popup.close()
    this.router.naviTo(['/add-wallet'])
  }

  let settingsaction=async (res)=>{
    this.popup.close()
this.router.naviTo(['/walletinfo',res])
  }

  this.popup.initpopup(walletsInfo,selectfunc,'',outsideaction,settingsaction)



}


 async selectNetwork(){
    let arr=[{'listname':'Ethereum Mainnet','imgurl':'',
    value:'mainnet',
    'listid':1,
    'searchphrase':'mainnet',
    'selected':await this.wallet.getCheckSelected('mainnet')
},
{'listname':'Kovan Test Network','imgurl':'',
    value:'kovan',
  'listid':2,
  'searchphrase':'kovan',
  'selected':await this.wallet.getCheckSelected('kovan')
},
{'listname':'Goerli Test Network','imgurl':'',
    value:'goerli',
  'listid':3,
  'searchphrase':'goerli',
  'selected':await this.wallet.getCheckSelected('goerli')
}
]

    let networksInfo={
      type:'list',
      height:'maxi',
      search: false,
      listimg: false,
      transparent: true,
      lists: arr,
      selectedValues:true,
      }


      let selectfunc=async (res)=>{
        this.popup.close()
        let value=res.value

  await this.wallet.saveNetwork(value).then(async ()=>{
   await this.wallet.reloadFunc()
    this.updatePage()
   
  })
  
      }

      this.popup.initpopup(networksInfo,selectfunc)
  }


  async updatePage(){
    let allwallets=await this.wallet.getAllWallet()

    this.noofwallets=allwallets.length

    await this.wallet.getMyWallet().then((data)=>{
      this.currentwallet=data
          })

    this.appSettings=await this.wallet.getAppSettings();

    

  }


  async reloadFunc(){

    this.updatePage();

    if(this.reloading==true) {
      setTimeout(async () =>{
        this.reloadFunc();
      },2000)
    }

  
  }

  async clearCache(){
this.noti.notify('success','Browser Cache Cleared!');
  }

  async securityOpts(){
    let arr=[{'listname':'Transaction Signature','imgurl':'',
    value:'signature',
    'listid':1,
    'switch':false
},
{'listname':'App Lock','imgurl':'',
    value:'lock',
  'listid':2,
  'switch':false
  
}
]

let rawsettings:any=await this.wallet.getAppSettings();



arr[0].switch=rawsettings.auth.signature
arr[1].switch=rawsettings.auth.lock


    let securityopts={
      type:'list',
      height:'maxi',
      title:'Allow authentication for',
      search: false,
      listimg: false,
      transparent: true,
      lists: arr,
     switch:true
      }

      let selectfunc=async (res)=>{
      let newswitch

      if(res.switch==true){
newswitch=false
      }else if(res.switch==false){
newswitch=true
      }
   

      if(res.value=='signature'){
rawsettings.auth.signature=newswitch
arr[0].switch=newswitch
      }else if(res.value=='lock'){
rawsettings.auth.lock=newswitch
arr[1].switch=newswitch
      }

    await this.wallet.saveAppSettings(rawsettings)

      }

      this.popup.initpopup(securityopts,selectfunc)

  }

  async notifyOpts(){
    let arr=[{'listname':'Transaction','imgurl':'',
    value:'transaction',
    'listid':1,
    'switch':false
},
{'listname':'Others','imgurl':'',
    value:'others',
  'listid':2,
  'switch':false
  
}
]

let rawsettings:any=await this.wallet.getAppSettings();



arr[0].switch=rawsettings.notification.transaction
arr[1].switch=rawsettings.notification.others


    let notiopts={
      type:'list',
      height:'maxi',
      title:'Allow Notification for',
      search: false,
      listimg: false,
      transparent: true,
      lists: arr,
     switch:true
      }

      let selectfunc=async (res)=>{
      let newswitch

      if(res.switch==true){
newswitch=false
      }else if(res.switch==false){
newswitch=true
      }
   

      if(res.value=='transaction'){
rawsettings.notification.transaction=newswitch
arr[0].switch=newswitch
      }else if(res.value=='others'){
rawsettings.notification.others=newswitch
arr[1].switch=newswitch
      }

    await this.wallet.saveAppSettings(rawsettings)

      }

      this.popup.initpopup(notiopts,selectfunc)

  }


  ionViewWillEnter(){
    console.log('Entering Settings..')
    this.reloading=true
    this.reloadFunc()
  }


  ionViewWillLeave(){
    console.log('Leaving Settings..')
    this.reloading=false
  }


  ngOnDestroy() {
  this.reloading=false
  console.log("Left Settings..")
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = false;
  }


  async ngOnInit() {
   await this.updatePage()
  }

}
