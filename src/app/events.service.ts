import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  tags=[]

  constructor() { }



  private messagedata= new Subject<any>();

  publish(data: any) {

    if(this.messagedata.isStopped==true){
this.messagedata=new Subject<any>();
this.messagedata.next(data);
    }else{
this.messagedata.next(data);
    }
   console.log(this.messagedata)
  }

  getData(tag?): Subject<any> {
      return this.messagedata;
  }


}
