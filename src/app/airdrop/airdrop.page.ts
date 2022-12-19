import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { EventsService } from "../events.service";
import { RouterService } from "../router.service";
import { WalletsService } from "../wallets.service";
import { Share } from '@capacitor/share';
import { NotiService } from "../noti.service";
import { Clipboard } from '@capacitor/clipboard';
import { Browser } from "@capacitor/browser";
import { PopupService } from "../popup.service";


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
  taskshare:any={
    'remainingdays':0
  }
  taskjointg:any={}


  airdrop_data:any={

  }
  airdropWallet:any

  reloading=true;

  appsettings:any
 
 
  constructor(
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    public router: RouterService,
    public wallet: WalletsService,
    public events: EventsService,
    private noti: NotiService,
    public popup: PopupService
  ) {}


  async openLink(mapurl){
    await Browser.open({ url: mapurl }); 
  }


async joinTg(){
  let link=this.appsettings.socials.telegram

  this.openLink(link).then(async ()=>{
    await this.wallet.taskDone('jointelegram').then(()=>{
      this.noti.notify('success','Task Updated!')
    })
  })

}

  async setSignUpTask(airdrop){
    let alltasks=airdrop.tasks
      
    let serv=alltasks.filter((data)=>{
     return data.tag== 'joinairdrop'
    })

    this.tasksignup=serv[0]

  }

  async setTgTask(airdrop){
    let alltasks=airdrop.tasks
      
    let serv=alltasks.filter((data)=>{
     return data.tag== 'jointelegram'
    })

    this.taskjointg=serv[0]
  }

  async setShareTask(airdrop){
    let alltasks=airdrop.tasks


      
    let serv=alltasks.filter((data)=>{
     return data.tag== 'share'
    })

    this.taskshare=serv[0]

    this.taskshare.remainingdays=this.taskshare.totalcounter - this.taskshare.hidden_sharecounter
  }

  async setReferTask(airdrop){
    let task={
      name:'',
      totalprogress:0,
      totaltask:0,
      noofprocessedtask:0,
      status:false,
      amount:0,
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
  
   task.status=true
   
    }

      if(serv[0].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+50

        let newamountgained=task.amount+serv[0].amount
        task.amount=newamountgained

        task.totalprogress=newprogress
      }

      if(serv[1].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+50

        let newamountgained=task.amount+serv[1].amount
        task.amount=newamountgained

        task.totalprogress=newprogress
      }
     
     
    


    task.tasks=serv
this.taskrefer=task

  }

  async startFunc(){
    let airdrop, appsettings;

    airdrop=await this.wallet.getAirdrop();
    appsettings=await this.wallet.getAppSettings();

    this.appsettings=appsettings

    this.airdrop_metadata=appsettings.airdrop_metadata
    this.airdrop_data=airdrop

    await this.setSignUpTask(airdrop)
    await this.setReferTask(airdrop)
    await this.setTgTask(airdrop)
    await this.setShareTask(airdrop)

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

async shareContent(){
  let task=this.taskshare
  if(task.can_share==true){
   console.log('Can Share!')
  }else{
    const tomorrowmessage = {
      type: 'message',
      height: 'maxi',
      transparent: true,
      message: 'Next content will be available tomorrow',
      messagetitle: 'Content Shared For Today',
      messageimg: true,
      messageimgurl: '../../assets/images/removewallet.png',
      messageactions: true,
      actionname: 'Okay'
    };

   let confirmfunc= ()=>{
  this.popup.close()
   }

    this.popup.initpopup(tomorrowmessage, confirmfunc);
    console.log('Can not Share!')
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

  async ionViewDidEnter() {
    
    this.routerOutlet.swipeGesture = true;
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
