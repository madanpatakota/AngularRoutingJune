import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SchoolComponent } from "./school/school.component";


//inteface which is useful for communicating b/w the two classes
// here class1. candeactive
// here class2. schoolcomponent 

// i am wring the method canDeactive. so
// based on the method i am communicating...
export interface canDeacativateSchoolComponent{
    canDeactivate() : boolean
}

@Injectable({'providedIn': "root"})

export class canDeactivateGuard implements 
CanDeactivate<SchoolComponent>{
    canDeactivate(component: SchoolComponent, 
        currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot,
         nextState?: RouterStateSnapshot | undefined): 
          boolean | UrlTree |
          Observable<boolean | UrlTree> | Promise<boolean |
           UrlTree> {
        
            var isDeactivate = false;

            if(component.canDeactivate()){
                isDeactivate = false;
                return isDeactivate;
            } 
            else{
                isDeactivate;
            }
            return isDeactivate;

    }




}

