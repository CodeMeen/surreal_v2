import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Share } from '@capacitor/share';
import { NotiService } from "../noti.service";
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-airdrop',
  templateUrl: './airdrop.page.html',
  styleUrls: ['./airdrop.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AirdropPage implements OnInit {
  airdrop_metadata:any={
    airdrop_can_start:''
  }

  tasksignup:any={}
  taskrefer:any={}
  taskshare:any={}


  airdrop_data:any={

  }
  airdropWallet:any

  reloading=true;

 
 
  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService,
    private noti: NotiService
  ) {}


  async setSignUpTask(airdrop){
    let alltasks=airdrop.tasks
      
    let serv=alltasks.filter((data)=>{
     return data.tag== 'joinairdrop'
    })

    this.tasksignup=serv[0]

  }

  async setReferTask(airdrop){
    let task={
      name:'',
      totalprogress:0,
      totaltask:0,
      noofprocessedtask:0,
      status:false,
      tasks:[]
    }

    let alltasks=airdrop.tasks
      
   let serv= alltasks.filter((data)=>{
     return data.tag== 'refer'
    })

    let donetask= alltasks.filter((data)=>{
      return data.tag== 'refer' && data.status==true
     })
 

 
    task.noofprocessedtask=donetask.length

    task.totaltask=serv.length
    task.name ='Refer '+serv.length+' Friends';

    if(serv[0].status==true && serv[1].status==true){
  
   task.totalprogress=100
   task.status=true
   
    }else{

      if(serv[0].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+50
        task.totalprogress=newprogress
      }

      if(serv[1].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+50
        task.totalprogress=newprogress
      }
     
     
    }


    task.tasks=serv
this.taskrefer=task

  }

  async startFunc(){
    let airdrop, appsettings;

    airdrop=await this.wallet.getAirdrop();
    appsettings=await this.wallet.getAppSettings();

    this.airdrop_metadata=appsettings.airdrop_metadata
    this.airdrop_data=airdrop

    await this.setSignUpTask(airdrop)
    await this.setReferTask(airdrop)

    this.airdropWallet=await this.wallet.checkAirdropWallet();

  
   
  }

async shareRef(message){
// check documentation during compiling
   let sd:any=await Share.canShare()
   console.log(sd)

   if(sd.value==false){
    await Clipboard.write({
      string:message
    });

    this.noti.notify('success','Copied!','Paste your referral info to your friends');

   }else{
    await Share.share({
      title: 'Join App lauch Giveaway/Airdrop',
      text: message,
      dialogTitle: 'Share with Friends',
    });
   }
  
    
}


    async ngOnInit() {
    await this.startFunc();
  }

  async reloadFunc(){

    this.startFunc();

    if(this.reloading==true) {
      setTimeout(async () =>{
        this.reloadFunc();
      },this.wallet.reloadtime)
    }

  }

  progressSize(progress){

    let styles = {
      'width': progress + '%',
    };
    return styles;

  }

  async ionViewWillEnter(){
    console.log('Entering AirDrop..')

    await this.startFunc();
   
    this.reloading=true
  this.reloadFunc()
  }


  ionViewWillLeave(){
    console.log('Leaving Airdrop..')
    this.reloading=false
  }


  ngOnDestroy() {
  this.reloading=false
  console.log("Left Airdrop")
  }

}
