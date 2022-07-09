import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotiService {
  type;
  opened;
  mtitle;
  mmessage;
  
    constructor() { }
  
    notify(type,mtitle?,mmessge?){
  
  if(type==='networkerr'){
    if(mtitle){
  this.mtitle=mtitle;
    }else{
    this.mtitle='Problem Connecting';
    }
  
    if(mmessge){
      this.mmessage=mmessge;
    }else{
      this.mmessage='Check Your Internet Connections And Try Again';
    }
  
  }else if(type==='servererr'){
  
    if(mtitle){
      this.mtitle=mtitle;
        }else{
          this.mtitle='An Error Happened';
        }
  
        if(mmessge){
          this.mmessage=mmessge;
        }else{
          this.mmessage='An error happened,please try again later.';
        }
  
  }else if(type==='success'){
    this.mtitle=mtitle;
    this.mmessage=mmessge;
  }else if(type==='error'){
    this.mtitle=mtitle;
    this.mmessage=mmessge;
  }
  
  this.type=type;
  this.opened=true;
  
  setTimeout(()=>{
    this.closenoti();
  },13000);
  
  }
  
  
  closenoti(){
  
    this.opened=false;
    this.type='';
  }
}
