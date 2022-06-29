import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(public router:Router) { }

  userEmail = "madan@gmail.com";     // Just imagine you are sending the valuesf rom textbox
  Password = "madan";                // Just imagine you are sending the valuesf rom textbox

  ngOnInit(): void {
    
  }

  evtSubmit(){
      if(this.userEmail == "madan@gmail.com" && this.Password == "madan"){
          localStorage.setItem("email",this.userEmail);
          localStorage.setItem("password",this.Password);
        
          this.router.navigate(["school"]);

      }
      else{
            alert("You are enter the wrong value. please try again.....");
      }
  }

}
