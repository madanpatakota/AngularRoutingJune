import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardGuard implements CanActivate {


  constructor(private router:Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log("can activate loaded");
    
      if(localStorage.getItem("email") == "madan@gmail.com" && 
         localStorage.getItem("password") == "madan"){
           return true;
         }
         else{
             this.router.navigate([""]);
             return false;

         }
      
  }
  
}
