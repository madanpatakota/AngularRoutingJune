
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class RolesResolve implements Resolve<string>{

    resolve() {
        
        let role = "";
        if(localStorage.getItem('email') == "madan@gmail.com"){
            role = "Admin";  // you are wringing some service..
        }
        else{
            role = "enduser";
        }

        return role;
    }
    
}
