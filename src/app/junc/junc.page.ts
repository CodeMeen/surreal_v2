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

  async ngOnInit(){
      
      

    let wallets=await this.wallet.getAllWallet();
   
console.log(wallets)
    if(!wallets){

    }else{

this.router.naviTo(['/account']);
    }

  }

}
