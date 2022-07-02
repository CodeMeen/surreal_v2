import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }


  private messagedata= new Subject<any>();

  publish(data: any) {
      this.messagedata.next(data);
  }

  getData(): Subject<any> {
      return this.messagedata;
  }


}
