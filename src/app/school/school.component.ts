import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { canDeacativateSchoolComponent } from '../can-deactivate.guard';
import { SchoolsListService } from '../schoolsList.serivce';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit ,
 canDeacativateSchoolComponent {

  constructor(public Schoolservice:SchoolsListService , private router:Router , private activateRoute:ActivatedRoute) { }

  schoolsList:any = [];
  Comments = "";

  canDeactivate(){
     if( this.Comments == ""){
          return window.confirm("Please check the data");
     }
     return true;
  }

  Submit(){

  }

  //schoolsList = [{Id:1, Name:"" , Location:"" }]
  ngOnInit(): void {
    this.schoolsList = this.Schoolservice.getSchoolsList();
    console.log(this.schoolsList);

    //data:["Getting data from Route"],
    this.activateRoute.data.subscribe((x)=>{
         console.log(x);
    })

    // this.activateRoute.data.subscribe(())


  }

  routerNavigation(ID:any){
    //code
    // simple 1 line code..
    // based on the router we are navigating....
    console.log(this.router.url);


    //http://localhost:4200/school/schoolInformtion/abc123
    //routerNavigation
    this.router.navigate(["school/schoolinformation",ID]);
    //this.router.navigate(["schoolinformation",ID]);
    //this.router.navigate(['schoolinformation'], { queryParams : {'SchoolID':ID}});
    //this.router.navigate(['schoolinformation'], { fragment : ID});

  }

}
