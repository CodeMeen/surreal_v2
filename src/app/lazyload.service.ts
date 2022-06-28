import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LazyloadService {


  
  constructor(public http: HttpClient) { }

  async init(event,src){

    const imageEL=event.currentTarget;

return '../../assets/images/tokens/defaulttoken.svg';
  }
}
