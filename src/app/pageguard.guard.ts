import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PageentererService } from './pageenterer.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class PageguardGuard implements CanActivate {
  constructor(private pageservice: PageentererService,private router: RouterService){}
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<any>{
    
    let pagename=route.data.path as String;
    let redirectto=route.data.redirectto as String

    let isAllowedIn=await this.pageservice.isAllowedIn(pagename);

    if(isAllowedIn==true){
      return true
    }else{
      this.router.naviTo([redirectto])
    }
    
  }
  
}
