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

  countDownDate;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  countdown:any;

  doneshowpop: boolean = false
  referrer_code:any


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

  myfunc = setInterval(async ()=> {

    var now = new Date().getTime();
    var timeleft = this.countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
  this.days= days + " d "
  this.hours= hours + " h "
  this.minutes = minutes + " m "
  this.seconds = seconds + " s "

   this.countdown = true;
 

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(this.myfunc);

        this.countdown = !this.countdown;

    }
}, 1000);


  async withdrawEarnings(){
   let alltasks=this.airdrop_data.tasks

   let search=alltasks.filter((data)=>{
    return data.status==true
   })
   
   if(search.length < alltasks.length){
    const message = {
      type: 'message',
      height: 'maxi',
      transparent: true,
      message: 'Complete all available tasks,then try again!',
      messagetitle: 'Tasks Not Completed',
      messageimg: true,
      messageimgurl: '../../assets/images/rederror.png',
      messageactions: true,
      actionname: 'Okay'
    };

   let confirmfunc= ()=>{
  this.popup.close()
   }

    this.popup.initpopup(message, confirmfunc);
    
   }else{

    if(!this.countdown){

      const newmessage = {
        type: 'message',
        height: 'mini',
        transparent: true,
        message: 'Congratulations, you are one of our winners. Click "Confirm" to continue, and your earnings will be transferred to your main wallet.',
        messagetitle: 'Congrats, You Won $'+this.airdrop_data.usdtbalance,
        messageimg: true,
        messageimgurl: '../../assets/images/medal.png',
        messageactions: true,
        actionname: 'Confirm'
      };
  
     let confirmfunc=async ()=>{
     this.popup.close()
     await this.wallet.withdrawEarnings()
     }
  
      this.popup.initpopup(newmessage, confirmfunc);



    }else{


      const newmessage = {
        type: 'countdown',
        height: 'maxi',
        transparent: true,
        message: 'Your withdrawal will be available in:',
        messagetwo: 'Our winners will be chosen at random throughout the given time above. To find out if you are one of the lucky winners, check back after the time specified above ends.',
        messagetitle: 'Withdraw Earnings',
        messageimg: false,
        messageimgurl: '../../assets/images/rederror.png',
        messageactions: true,
        countDownDate: this.countDownDate,
        actionname: 'Okay'
      };
  
     let confirmfunc=async ()=>{
     this.popup.close()
     }
  
      this.popup.initpopup(newmessage, confirmfunc);

    }

   }

  }

  async openLink(mapurl){
    await Browser.open({ url: mapurl }); 
  }


async joinTg(){

  
  let link=this.appsettings.socials.telegram

  console.log(this.appsettings)
  console.log(link)

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
    task.name ='Refer '+serv.length+' Friend';

    /*
    if(serv[0].status==true && serv[1].status==true){
  
     task.status=true
   
    }
    */


    if(serv[0].status==true ){
      task.status=true
    }

      if(serv[0].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+100

        let newamountgained=task.amount+serv[0].amount
        task.amount=newamountgained

        task.totalprogress=newprogress
      }

      /*

      if(serv[1].status==true){
        let prevprogress=task.totalprogress
        let newprogress=prevprogress+50

        let newamountgained=task.amount+serv[1].amount
        task.amount=newamountgained

        task.totalprogress=newprogress
      }

      */
     
     
    


    task.tasks=serv
this.taskrefer=task

  }

  async startFunc(){
 
    let airdrop, appsettings;

    airdrop=await this.wallet.getAirdrop();
    appsettings=await this.wallet.getAppSettings();

    this.appsettings=appsettings

    this.airdrop_metadata=appsettings.airdrop_metadata
    this.countDownDate=new Date(this.airdrop_metadata.airdrop_expiry_date).getTime();


    this.airdrop_data=airdrop

    await this.setSignUpTask(airdrop)
    await this.setReferTask(airdrop)
    await this.setTgTask(airdrop)
    await this.setShareTask(airdrop)

    this.airdropWallet=await this.wallet.checkAirdropWallet();

    await this.checkAllTaskDone();
   
  }

  async saveReferCode(){
    let refercode= this.referrer_code

    if(refercode=='' || !refercode){
     this.noti.notify('error','Enter required field!');
    }else{
    await this.wallet.addReferrer(refercode)
    }
  }

async shareRef(message){


this.router.naviTo(['sharetextcontent'])


}

async shareContent(){
  let task=this.taskshare
  if(task.can_share==true){
    this.router.naviTo(['/sharecontent'])
   console.log('Can Share!')
  }else{
    const tomorrowmessage = {
      type: 'message',
      height: 'maxi',
      transparent: true,
      message: 'Next content will be available tomorrow',
      messagetitle: 'Content Shared For Today',
      messageimg: true,
      messageimgurl: '../../assets/images/attention.png',
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

  async checkAllTaskDone(){
    let has_withdrawn=this.airdrop_data.hasWithdrawn

    let alltasks=this.airdrop_data.tasks

    let search=alltasks.filter((data)=>{
     return data.status==true
    })

    if((search >= alltasks) && has_withdrawn==false){

      if(this.doneshowpop==false){

        const successmessage = {
          type: 'message',
          height: 'maxi',
          transparent: true,
          message: 'You have participated and completed all Giveaway/Airdrop tasks,click on the Withdraw To Wallet button to send earnings to your crypto wallet',
          messagetitle: 'Tasks Completed',
          messageimg: true,
          messageimgurl: '../../assets/images/greensuccess.png',
          messageactions: false
        };
  
        this.popup.initpopup(successmessage);

      }
      

      this.doneshowpop=true
    }



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
