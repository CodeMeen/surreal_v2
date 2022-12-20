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


@Component({
  selector: "app-sharecontent",
  templateUrl: "./sharecontent.page.html",
  styleUrls: ["./sharecontent.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SharecontentPage implements OnInit {
  share_img_base64;
  share_img_url;
  task?: any = {};

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

    await this.wallet.loadShareImg().then(
      (data) => {
        this.share_img_base64 = data.base64;
        this.share_img_url= data.image_url

      },
      (error) => {
        console.log(error);
      }
    );
  }

  async shareImg() {
    let sd:any=await Share.canShare()
   console.log(sd)

   if(sd.value==false){
  
    this.noti.notify('error','Can not share file on web');

   }else{
    await Share.share({
      title: 'Share Image',
      url:  this.share_img_url,
      dialogTitle: 'Share Image',
    });
   }

/*
    FileSharer.share({
        filename: "banner.png",
        contentType: "image/png",
        // If you want to save base64:
        base64Data: this.share_object_url,
        // If you want to save a file from a path:
        path: "",
    }).then(() => {
        // do sth
    }).catch(error => {
        console.error("File sharing failed", error.message);
    });

    */
}

  async ionViewDidEnter() {
    this.routerOutlet.swipeGesture = true;
  }

  async ionViewWillEnter() {
    console.log("Entering ShareContent..");

    await this.startFunc();
  }

  ionViewWillLeave() {
    console.log("Leaving ShareContent..");
  }

  ngOnDestroy() {
    console.log("Left ShareContent..");
  }

  ngOnInit() {}
}
