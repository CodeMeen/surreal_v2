import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  status=false

  start(){
    this.status=true;
  }

  end(){
    this.status=false;
  }

  constructor() { }
}
