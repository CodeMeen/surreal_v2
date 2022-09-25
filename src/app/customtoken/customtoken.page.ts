import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Clipboard } from "@capacitor/clipboard";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NotiService } from "../noti.service";
import { LoaderService } from "../loader.service";

@Component({
  selector: 'app-customtoken',
  templateUrl: './customtoken.page.html',
  styleUrls: ['./customtoken.page.scss'],
})
export class CustomtokenPage implements OnInit {

  resdata:any={}
  successflag=false;

  constructor( private http: HttpClient,
    private route: ActivatedRoute,
    public router: RouterService,
    private wallet: WalletsService,
    public noti: NotiService,
    private cd: ChangeDetectorRef,
    public loader: LoaderService
    ) { }

    async pasteAddress() {
      const { type, value } = await Clipboard.read();
  
      this.resdata.address = value;
    }

    async saveToken(){
      
    }

  ngOnInit() {
  }

}
