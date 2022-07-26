import { Component, OnInit ,ViewChild, ViewEncapsulation} from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { LazyloadService } from '../lazyload.service';

@Component({
  selector: 'app-addtoken',
  templateUrl: './addtoken.page.html',
  styleUrls: ['./addtoken.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddtokenPage implements OnInit {

  mytokens:any[]=[];
  alltokens: any[]=[];
  allchains:any[]=[];
  reducedtokens:any[]=[]
  searchinput:string;

  searchedTokens:any[]=[];
  searching=false;
  constructor(private routerOutlet: IonRouterOutlet,public router: RouterService,public wallets: WalletsService,public lazyload:LazyloadService) { }

  searchMyTokens(tokenname){

    let namedata = this.mytokens.filter((el)=>el.name==tokenname);
    
    if(namedata.length <= 0){
return false;
    }else{
      return true;
    }
     
  }

  async selectToken(tokenname,tokentype){
    let dataarr = this.alltokens.filter((el)=>el.name==tokenname && el.type==tokentype );
    let selectedtoken=dataarr[0];


    await this.wallets.saveToken(selectedtoken);
    this.syncTokens();

  }

  checkAvail(tokenname,tokentype){
    let dataarr = this.mytokens.filter((el)=>el.name==tokenname && el.type==tokentype );

    if(dataarr.length >= 1){
return true;
    }else{
      return false;
    }
  }

  toggleSelect(tokenname,tokentype){
    let dataarr = this.mytokens.filter((el)=>el.name==tokenname && el.type==tokentype );

    if(dataarr.length >= 1){
      this.deselectToken(tokenname,tokentype);
    }else{
this.selectToken(tokenname,tokentype);
    }
  }
  

  async deselectToken(tokenname,tokentype){
   
    await this.wallets.unsaveToken(tokenname,tokentype);
    this.syncTokens();
  }

  searchToken(data){

    let finalsearch:any[]=[];
    let collatesearch:any[]=[];

    if(data===''){
      this.searching=false;
    }else{
      this.searching=true;

      const namesearch = this.alltokens.filter((el)=>el.name.toLowerCase().search(data.toLowerCase()) > -1);
      const symbolsearch=this.alltokens.filter((el)=>el.symbol.toLowerCase().search(data.toLowerCase()) > -1);
      const addresssearch=this.alltokens.filter((el)=>el.address?.search(data) > -1);
      const typesearch=this.alltokens.filter((el)=>el.type.toLowerCase().search(data.toLowerCase()) > -1);

  
      for (let index = 0; index < namesearch.length; index++) {
        const eachsort = namesearch[index];
        collatesearch.push(eachsort);   
      }

      for (let index = 0; index < symbolsearch.length; index++) {
        const eachsort = symbolsearch[index];
        collatesearch.push(eachsort);   
      }

      for (let index = 0; index < addresssearch.length; index++) {
        const eachsort = addresssearch[index];
        collatesearch.push(eachsort);   
      }

      for (let index = 0; index < typesearch.length; index++) {
        const eachsort = typesearch[index];
        collatesearch.push(eachsort);   
      }



      for (let index = 0; index < collatesearch.length; index++) {
        const eachsort = collatesearch[index];

        let sortname:string=eachsort.name;
        let sorttype:string=eachsort.type;

        let searchtest=finalsearch.filter((el)=>el.name?.toLowerCase()==sortname.toLowerCase() && el.sorttype?.toLowerCase()==sorttype.toLowerCase());

        if(searchtest.length <= 0){
        finalsearch.push(eachsort);
        }else{

        }
        
      }

      this.searchedTokens=[];

      this.searchedTokens=finalsearch;
  

    }

   



  }
  

  async syncTokens(){
    this.mytokens=await this.wallets.getMyTokens();
    this.allchains=await this.wallets.getAllChains();

    
    this.alltokens=await this.wallets.getAllTokens();

    for (let index = 0; index < 31; index++) {
      const element = this.alltokens[index];
      this.reducedtokens.push(element);
    }
  }

 
  async ngOnInit() {
    this.routerOutlet.swipeGesture = true;

    this.syncTokens();

   

  }

}
