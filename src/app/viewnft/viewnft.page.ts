import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../router.service';
import { WalletsService } from '../wallets.service';
import { EventsParams, SwiperComponent } from "swiper/angular";
import SwiperCore, { SwiperOptions, Pagination, EffectCards } from "swiper";
import { HttpClient } from '@angular/common/http';
import { IonRouterOutlet } from '@ionic/angular';

SwiperCore.use([EffectCards,Pagination]);

@Component({
  selector: 'app-viewnft',
  templateUrl: './viewnft.page.html',
  styleUrls: ['./viewnft.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ViewnftPage implements AfterContentChecked,OnInit{

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions= {
    slidesPerView: 1,
    pagination:{
      clickable:true,
      type:'fraction'
    },
    effect: 'cards',
    cardsEffect: {
      // ...
    },
    };


  nfts:any[]=[]

  currentNftIndex:any 
  currentNft:any={}
  currentMetadata:any={}
  

  constructor(public router:RouterService,private route: ActivatedRoute,public wallet:WalletsService, private http: HttpClient,private routerOutlet: IonRouterOutlet,private cd: ChangeDetectorRef,) { }

  shortAddr(string) {

    let firstpart = string.slice(0, 7)
    let lastpart = string.slice(-7)

    let newstring = firstpart + '...' + lastpart

    return newstring

}

  updatecurrindex(event){
    this.currentNftIndex = this.swiper.swiperRef.activeIndex;
    this.currentNft=this.nfts[this.currentNftIndex];
    this.currentNft['shortAddress']=this.shortAddr(this.currentNft.token_address)
    this.currentMetadata=JSON.parse(this.currentNft.metadata)


if(!this.currentMetadata.name || this.currentMetadata.name==''){
  this.currentMetadata['name']=this.currentNft.name
  }
  

    console.log(this.currentMetadata);
    this.cd.detectChanges();
  }

  async loadNftImgs() {
    let nfts = this.nfts;

    for (let index = 0; index < nfts.length; index++) {
      let nftindex = index;
      let eachnft = nfts[index];
      let imgUrl = eachnft.raw_media; 

      let newImgUrl=imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/");

      if(newImgUrl.search('data:image') >= 1){
        eachnft['media_type']='image'
        eachnft['loaded_media']=newImgUrl
        eachnft['media_status']='loaded'
      }else if(newImgUrl.search('data:video') >= 1){
        eachnft['media_type']='video'
        eachnft['loaded_media']=newImgUrl
        eachnft['media_status']='loaded'
      }else{
        this.http.get(newImgUrl, { responseType: "blob" }).subscribe(
          async (res) => {
            let blobdata: Blob = res;

          
            if( (blobdata.type == 'image/png' || blobdata.type == 'image/gif' ||  blobdata.type == 'image/jpeg' || blobdata.type == 'video/mp4') && blobdata.size <= 15000000 ){

              
           

              let gendata=new Promise((resolve,reject)=>{
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
  
                reader.readAsDataURL(blobdata);
              })
  
              let base64img=await gendata

              if( blobdata.type == 'image/png' || blobdata.type == 'image/gif' ||  blobdata.type == 'image/jpeg' ){
                eachnft['media_type']='image'
              }else if(blobdata.type == 'video/mp4'){
                eachnft['media_type']='video'
              }

              eachnft['loaded_media']=base64img
              eachnft['media_status']='loaded'


            }

          },

          (err) => {
            eachnft['media_status']='error'
            eachnft['loaded_media']='../../assets/images/offline.svg'
            console.log(err);
            
          }
        );
      }

     
    

     

      
    }
  }

  ngAfterContentChecked() {

    if(this.swiper){
    this.swiper.updateSwiper({});
    }
    
    }



 async ngOnInit() {
  this.routerOutlet.swipeGesture = true;
    const routeParams = this.route.snapshot.paramMap;
    let nftaddr=routeParams.get('nftaddr');

await this.wallet.loadNft(nftaddr).then((data)=>{

this.nfts=data
this.currentNft=this.nfts[0]
this.currentNft['shortAddress']=this.shortAddr(this.currentNft.token_address)
this.currentMetadata=JSON.parse(this.currentNft.metadata)

if(!this.currentMetadata.name || this.currentMetadata.name==''){
this.currentMetadata['name']=this.currentNft.name
}

console.log(this.currentMetadata)

this.loadNftImgs()
},
(error)=>{

})

    
  }

}
