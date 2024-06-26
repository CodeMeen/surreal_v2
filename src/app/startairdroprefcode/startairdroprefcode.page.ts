import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-startairdroprefcode',
  templateUrl: './startairdroprefcode.page.html',
  styleUrls: ['./startairdroprefcode.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class StartairdroprefcodePage implements OnInit {

  createData={
    refcode:''
  }


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService) { }

  saverefcode(){
    let refcode=this.createData.refcode
 console.log(refcode)
    

    this.wallet.joinAirdrop(refcode).then((data)=>{

      if(data==true){
        this.noti.notify('success','Joined!')
        this.router.naviTo(['/airdrop']);
      }

    })

    
  
  }


  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
  }
  
  ngOnInit() {
  }

}
