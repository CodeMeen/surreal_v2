import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { NotiService } from '../noti.service';
import { PopupService } from '../popup.service';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-verifyphrase',
  templateUrl: './verifyphrase.page.html',
  styleUrls: ['./verifyphrase.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class VerifyphrasePage implements OnInit {
  shuffledWords:any
  walletMnemonic:any
  wordsArray:any[]=[]

  selectedWords:any[]=[]


  constructor(private route: ActivatedRoute,private routerOutlet: IonRouterOutlet,public router: RouterService,public wallet:WalletsService, public popup: PopupService,public noti: NotiService
    ,public loader: LoaderService,private elemref:ElementRef) { }

    async startfunc(){
      const routeParams = this.route.snapshot.paramMap;

      let walletid = routeParams.get("walletid");
      
      if(!walletid){
  this.router.naviTo(['/account']);
      }else{
        this.walletMnemonic=await this.wallet.getWalletMnemonic(walletid)
        let words = this.walletMnemonic.split(" ");

       for (let index = 0; index < words.length; index++) {
        let eachword= words[index];
        let wordindex=index

        let newobj={'word':eachword,'index':wordindex}

        this.wordsArray.push(newobj)
       }


       this.shuffledWords=await this.shuffleArray(this.wordsArray)
  
      }
    }

    async shuffleArray(array){
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }

    async selectWord(obj,event){

this.selectedWords.push(obj)


let shuffledwords=this.shuffledWords

let selectedword=obj.word
let selectedid=obj.index

let originalobj=this.wordsArray

let searchoriginal=originalobj.filter((data)=>{
  return data.word==selectedword
})

let originalid=searchoriginal[0].index

if(selectedid == originalid){
  console.log('Matches!')
}



    }

  async ngOnInit() {
    await this.startfunc()
  }

}
