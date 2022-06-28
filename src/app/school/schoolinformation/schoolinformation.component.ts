import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsListService } from 'src/app/schoolsList.serivce';


@Component({
  selector: 'app-schoolinformation',
  templateUrl: './schoolinformation.component.html',
  styleUrls: ['./schoolinformation.component.css']
})
export class SchoolinformationComponent {

  // concept : i am going to take the help of activated router
  // and based on the activated Router

  // i will subscribe the paramter(schoolID);


  //Array we are having the filter method . i am goin gto use th that
  constructor(private activateRouter: ActivatedRoute,
              private schoolService:SchoolsListService,
              private router:Router) { }

  filterdSchoolList:any = [];
  ngOnInit(){
     this.activateRouter.params.subscribe((response)=>{
        console.log(response);   //xyz123
        this.filterdSchoolList =  
        
        this.schoolService.getSchoolsList().
        filter((x)=> x.ID === response["any"]);

        console.log(this.router.url);
     })


    // this.activateRouter.queryParams.subscribe((response)=>{

    //       // {SchoolID : 'xyz'}\
    //      //response.SchoolID
    //      //response["SchoolID']
    //       console.log(response);   //xyz123
    //       this.filterdSchoolList =  
          
    //       this.schoolService.getSchoolsList().
    //       filter((x)=> x.ID === response["SchoolID"]);
  
    //       console.log(this.router.url);
    //    })


    // this.activateRouter.fragment.subscribe((response)=>{
    //       // response  is now  xyz123
    //       //http://localhost:4200/schoolinformation#xyz123
    //       console.log(response);   //xyz123
    //       this.filterdSchoolList =  
    //        this.schoolService.getSchoolsList().
    //       filter((x)=> x.ID === response);
    //       console.log(this.router.url);
    //    })




  }

}
