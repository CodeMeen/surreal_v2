import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {

  searchdata;


  constructor(public popUp: PopupService,public wallet: WalletsService) {
   }

  listfunc=(paramfunc,data)=>{
paramfunc(data);
  };

  messagefunc=(paramfunc,action)=>{
paramfunc(action);
  };

  runnAction(func,action?){
    func(action)
    
  }

  closepop(){
    this.popUp.close();
  }

  searchList(){

  }

  ngOnInit() {

  }

}
