import { Injectable } from '@angular/core';
import { WalletsService } from './wallets.service';

@Injectable({
  providedIn: 'root'
})
export class PageentererService {

  
  constructor(public wallet: WalletsService) { }

  async isAllowedIn(pagetype){
    if(pagetype=='airdropstart' || pagetype=='startairdroprefcode'){

      let airdrop:any=await this.wallet.getAirdrop();

      if(!airdrop || airdrop=='' || airdrop==null){
      return true
      }else{
      return false
      }

    }else if(pagetype=='account'){

      let allwallets:any=await this.wallet.getAllWallet()

      if(!allwallets || allwallets==null){
        return false
      }else{
        return true
      }


    }else{
      return true
    }
    
    }

  }

 
