import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolsListService } from '../schoolsList.serivce';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(public Schoolservice:SchoolsListService , private router:Router) { }

  schoolsList:any = [];
  //schoolsList = [{Id:1, Name:"" , Location:"" }]
  ngOnInit(): void {
    this.schoolsList = this.Schoolservice.getSchoolsList();
    console.log(this.schoolsList);
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
