import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-junc',
  templateUrl: './junc.page.html',
  styleUrls: ['./junc.page.scss'],
})
export class JuncPage implements OnInit {

  constructor(private router: RouterService,private wallet: WalletsService) { }

  async ionViewDidEnter() {  
    setTimeout(async ()=>{
      await this.checkToPage()
    },1500)

  }

  async checkToPage(){
    let wallets=await this.wallet.getAllWallet();
   
    if(!wallets || wallets == null){
this.router.naviTo(['/home'])
    }else{
this.router.naviTo(['/account']);
    }
  }


  async ngOnInit(){
       

  }

  

}
