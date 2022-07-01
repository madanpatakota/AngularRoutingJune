import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class canActivateChild implements CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log("canactivate child has loaded");


        //some condtions 
        // Case study 
           //1. Create the service UsersList service...


           //2. incase only give the access for one particular user 
           // for opening the schoolinformaion page...


          // if()  // ===> that logged user is availble in the service then opent the schoolinformaiton page
          // else {}  --> alert('you are not atuherizued');




        return true;
        
    }

}
