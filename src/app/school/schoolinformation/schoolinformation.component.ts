import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsListService } from 'src/app/schoolsList.serivce';


@Component({
  selector: 'app-schoolinformation',
  templateUrl: './schoolinformation.component.html',
  styleUrls: ['./schoolinformation.component.css']
})
export class SchoolinformationComponent {

  // concept : i am going to take the help of activated router and based on the activated Router
  // i will subscribe the paramter(schoolID);


  //Array we are having the filter method . i am goin gto use th that
  constructor(private activateRouter: ActivatedRoute,
              private schoolService:SchoolsListService,
              private router:Router) { }

  filterdSchoolList:any = [];
  ngOnInit(){
     this.activateRouter.params.subscribe((response)=>{
        console.log(response);
        this.filterdSchoolList =  
        this.schoolService.getSchoolsList().
        filter((x)=> x.ID === response["any"]);

        console.log(this.router.url);
     })

  }

}
