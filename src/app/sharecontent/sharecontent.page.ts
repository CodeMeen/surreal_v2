import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Share } from "@capacitor/share";
import { NotiService } from "../noti.service";
import { Clipboard } from "@capacitor/clipboard";
import { Browser } from "@capacitor/browser";
import { PopupService } from "../popup.service";
import { Directory, Filesystem } from '@capacitor/filesystem';


@Component({
  selector: "app-sharecontent",
  templateUrl: "./sharecontent.page.html",
  styleUrls: ["./sharecontent.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SharecontentPage implements OnInit {
  share_img_base64;
  share_img_url;
  share_img_uri;

  task?: any = {};
  reloading=true;

  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService,
    private noti: NotiService,
    public popup: PopupService
  ) {}

  async startFunc() {
    let airdrop = await this.wallet.getAirdrop();
    let alltasks = airdrop.tasks;

    let serv = alltasks.filter((data) => {
      return data.tag == "share";
    });

    this.task = serv[0];

    await this.wallet.loadShareImg().then(async (data) => {
        this.share_img_base64 = data.base64;
        this.share_img_url= data.image_url
        let filename='banner.png'

     await Filesystem.writeFile({
          path: filename,
          data: this.share_img_base64,
          directory: Directory.Cache
        })
          .then(async () => {
           let uriResult:any=await Filesystem.getUri({
              directory: Directory.Cache,
              path: filename
            });

            this.share_img_uri=uriResult.uri

            
          })

      },
      (error) => {
        console.log(error);
      }
    );
  }

  async shareImg() {
    let sd:any=await Share.canShare()
   console.log(sd)

let airdrop=await this.wallet.getAirdrop();
let tasks=airdrop.tasks
let respsh=tasks.filter((data)=>{
 return data.tag=='share'
})


if(respsh.length >= 1){

  let thetask=respsh[0]

  if(thetask.can_share==true){


   if(sd.value==false){
  
    this.noti.notify('error','Can not share file on web');

    this.wallet.taskDone('share').then(()=>{
      this.noti.notify('success','Task Updated!');
      this.router.goBack();
  })

   }else{
    console.log('To share URI',this.share_img_uri)
    await Share.share({
      title: 'Share Image',
      dialogTitle: 'Share Image',
      files:[this.share_img_uri]
    }).then(async ()=>{
       this.wallet.taskDone('share').then(()=>{
        this.noti.notify('success','Task Updated!')
        this.router.goBack();
    })
  })
   }


  }else{
    this.router.goBack(); 
  }

}


}

async checkcanshare(){
let airdrop=await this.wallet.getAirdrop();
let tasks=airdrop.tasks
let respsh=tasks.filter((data)=>{
return data.tag=='share'
})

if(respsh.length >= 1){

  let thetask=respsh[0]

  if(thetask.can_share==true){

  }else{
    this.router.goBack(); 
  }

}

}
async reloadFunc(){


  if(this.reloading==true) {
    setTimeout(async () =>{
      this.reloadFunc();
    },this.wallet.reloadtime)
  }

}

  async ionViewDidEnter() {
    this.routerOutlet.swipeGesture = true;
  }

  async ionViewWillEnter() {
    console.log("Entering ShareContent..");
    await this.startFunc();

    this.reloading=true
    this.reloadFunc()
  }

  ionViewWillLeave() {
    console.log("Leaving ShareContent..");
    this.reloading=false
  }

  ngOnDestroy() {
    console.log("Left ShareContent..");
    this.reloading=false
  }

  ngOnInit() {}
}
