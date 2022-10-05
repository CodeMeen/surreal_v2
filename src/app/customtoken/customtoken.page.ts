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

  newtoken:any={}

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

      this.resdata.address = value.trim();

      this.loadMetadata()
    }

    async saveToken(){
      if(this.successflag==true){
        await this.wallet.saveToken(this.newtoken).then(() => {
          this.noti.notify('success','Token Added!')
          this.router.naviTo(['/account'])
        })
      }
     
    }

    async loadMetadata() {
      await this.wallet.getErc20Metadata(this.resdata.address).then(async (value:any)=>{
        if(value && value[0].name!=''){

          let valr=value[0]


          this.newtoken=valr

          this.newtoken['type']='ERC20'

         
          this.newtoken["coinbalance"]=0;
         this.newtoken["usdbalance"]=0;
          this.newtoken["usdprice"]=0;
          this.newtoken['pendingTxs']=[]

          this.newtoken["logoURI"]=valr.logo;

          let networkname=await this.wallet.getCurrentNetworkName();

          if(networkname != 'mainnet'){
            this.newtoken["network"]=networkname;
          }

         
          this.newtoken['chainId']=await this.wallet.getCurrentNetworkNumber();
          this.newtoken['publickey']=await this.wallet.getPublicKey('ethereum');

          this.resdata.name=this.newtoken.name
          this.resdata.symbol=this.newtoken.symbol
          this.resdata.decimals=this.newtoken.decimals

         

          console.log(this.newtoken)
          this.successflag=true
        }else{
          this.resdata.name=''
          this.resdata.symbol=''
          this.resdata.decimals=''
          this.successflag=false
        }
       
      })
    }

  ngOnInit() {
  }

}
