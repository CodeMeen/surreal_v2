import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SettingsPage implements OnInit {

 currentwallet:any={}

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

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
      selectedValues:true
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
    await this.wallet.getMyWallet().then((data)=>{
      this.currentwallet=data
          })
  }

  async ngOnInit() {
   await this.updatePage()
  }

}
