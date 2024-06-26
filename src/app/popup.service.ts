import { Injectable } from '@angular/core';
import { settings } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popopened=false;

  type;
  search;
  listimg=false;
  lists;
  listresponse?;
  listaction;
  listtitle;
  listactionparam;
  listswitch=false;
  message;
  messagetwo;
 messagetitle;
 messageimg=false;
 messageimgurl;
 messageactions=false;

messageactionname;
messageactionparam;

 messageaction;
 messageresponse?;
height='maxi';
 currentlist;

 transparent;
 searchfunc;
 selectedValues=false
 otherName=false
 outfunction=false
 outActionName:any

 outsideAction:any

 settingsFunc:any
 settingsflag=false


 countDownDate;
 days: any;
 hours: any;
 minutes: any;
 seconds: any;

 countdown:any;

  constructor( ) { }

  initpopup(arr,func?,funcparam?,outsideaction?,settingsfunc?){

this.type=arr.type;
this.height=arr.height;
this.transparent=arr.transparent;

if(arr.type==='list'){

this.search=arr.search;
this.listimg=arr.listimg;
this.lists=arr.lists;


this.listaction=func;
this.listactionparam=funcparam;

if(arr.selectedValues){
  this.selectedValues=arr.selectedValues 
}

if(arr.otherName){
  this.otherName=arr.otherName
}

if(arr.title){
  this.listtitle=arr.title
}else{
  this.listtitle=''
}

if(arr.switch==true){
this.listswitch=true;
}else{
this.listswitch=false;
}



}else if(arr.type==='message'){
this.message=arr.message;
this.messagetitle=arr.messagetitle;
this.messageimg=arr.messageimg;
this.messageimgurl=arr.messageimgurl;

if(arr.messageactions===true){
this.messageactions=arr.messageactions;
 this.messageactionname=arr.actionname;
 this.messageaction=func;
 this.messageactionparam=funcparam;
}else{
 this.messageactions=false;
 this.messageactionname=null;
 this.messageaction=false;
 this.messageactionparam=null;
}


}else if(arr.type=='selectlist'){

}else if(arr.type=='countdown'){
  
  this.message=arr.message;
  this.messagetwo=arr.messagetwo
  this.messagetitle=arr.messagetitle;
  this.countDownDate=arr.countDownDate

  let countdownfunc = setInterval(async ()=> {

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
        clearInterval(countdownfunc);
  
        this.countdown = !this.countdown;
  
    }
  }, 1000);

}


if(outsideaction){
  this.outsideAction=outsideaction
  this.outActionName=arr.outactionname
  this.outfunction=true
}else{
  this.outfunction=false
}

if(settingsfunc){
this.settingsflag=true
this.settingsFunc=settingsfunc
}else{
  this.settingsflag=false
}

this.currentlist=this.lists;
this.popopened=true;


}

searchlist(data){
  if(data===''){
    this.currentlist=this.lists;
  }else{
    const newArray = this.lists.filter((el)=>el.listname.toLowerCase().search(data.toLowerCase()) > -1 || el.searchphrase.toLowerCase().search(data.toLowerCase()) > -1 );
    this.currentlist=newArray;
  }
}

close(){
  this.popopened=false;
}
}
