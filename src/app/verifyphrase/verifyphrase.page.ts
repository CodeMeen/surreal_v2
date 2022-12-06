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

  completeflag:any=false


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

       this.shuffledWords.forEach(el => {
        el.alreadyselected=false
       });
  
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

    async selectWord(obj){
    
      let arrsearch=this.selectedWords.filter((el)=>{
       return el.word==obj.word && el.index==obj.index
      })

      if(arrsearch.length >= 1){

      }else{
        
        this.selectedWords.push(obj)


        let shuffledwords=this.shuffledWords
        
        let originalword=obj.word
        let originalposition=obj.index
        
        let selectedposition=this.selectedWords.findIndex((el)=>{
          return el.index==originalposition && el.word==originalword
        })
        
        if(selectedposition == originalposition){
        this.selectedWords[selectedposition].correctselect=true
        }else{
        this.selectedWords[selectedposition].correctselect=false
        this.noti.notify('error','Incorrect input');
        }

        this.selectedWords[selectedposition].alreadyselected=true
        
      

        let shuffledposition=this.shuffledWords.findIndex((el)=>{
          return el.index==obj.index && el.word==obj.word
        })

        this.shuffledWords[shuffledposition].alreadyselected=true

      

      }


     if(this.selectedWords.length == this.wordsArray.length ){

      let arrsearch=this.selectedWords.filter((el)=>{
        return el.correctselect==false
      })

      if(arrsearch.length >= 1){
        this.completeflag=false
      }else{
        this.completeflag=true
      }


     }else{
      this.completeflag=false
     }



    }

    async removeWord(obj){

      let arrsearch=this.selectedWords.filter((el)=>{
        return el.word==obj.word && el.index==obj.index
       })
 
       if(arrsearch.length >= 1){

        let shuffledposition=this.shuffledWords.findIndex((el)=>{
          return el.index==obj.index && el.word==obj.word
        })

        this.shuffledWords[shuffledposition].alreadyselected=false


        let selectedposition=this.selectedWords.findIndex((el)=>{
          return el.index==obj.index && el.word==obj.word
        })


        this.selectedWords[selectedposition]=null



        let filtered = this.selectedWords.filter(function (el) {
          return el != null
        });

        console.log(filtered)


        this.selectedWords=filtered

        let startposition=selectedposition

        for (let index = startposition; index < this.selectedWords.length; index++) {
          let selwords = this.selectedWords[index];

          selwords.correctselect=false;
        
        }

       }

       if(this.selectedWords.length == this.wordsArray.length ){

        let arrsearch=this.selectedWords.filter((el)=>{
          return el.correctselect==false
        })
  
        if(arrsearch.length >= 1){
          this.completeflag=false
        }else{
          this.completeflag=true
        }
  
  
       }else{
        this.completeflag=false
       }

  }

  async doneverify(){
    if(this.completeflag ==true){
this.router.naviTo(['/account']);
this.noti.notify('success','Wallet has been backed up successfully!')
    }
  }

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = false;
  }

  async ngOnInit() {
    await this.startfunc()
  }

}
