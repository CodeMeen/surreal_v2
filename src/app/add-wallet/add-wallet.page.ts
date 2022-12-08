import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { HostListener } from'@angular/core';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.page.html',
  styleUrls: ['./add-wallet.page.scss'],
  encapsulation:ViewEncapsulation.None
})

@HostListener('window:scroll', ['$event'])

export class AddWalletPage implements OnInit {

  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

    step:any

    onWindowScroll() {
      let element = document.querySelector('.purpheader') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('opaqueheader');
      } else {
        element.classList.remove('opaqueheader');
      }
    }

    async importWallet(){

      let arr=[ {'listname':'Import from Mnemonic','imgurl':'',
      value:'mnemonic',
      'listid':'1',
      'searchphrase':'mnemonic'
    },
    {'listname':'Import from Private Key','imgurl':'',
    value:'privatekey',
    'listid':'2',
    'searchphrase':'privatekey'
  }]

      let tyInfo={
        type:'list',
        height:'mini',
        search: false,
        listimg: false,
        transparent: true,
        lists: arr,
        selectedValues:false,
        otherName:false,
        }
      
        let selectfunc=async (res)=>{
          this.popup.close()
          let value=res.value
          

          if(value=='mnemonic'){
          this.router.naviTo(['/from-mnemonic'])
          }else if(value=='privatekey'){
          this.router.naviTo(['/from-privatekey'])
          }
  
        }

       
        this.popup.initpopup(tyInfo,selectfunc)
    }

    async ionViewDidEnter() {
    
      this.routerOutlet.swipeGesture = true;
  }

  ngOnInit() {

  }



}
