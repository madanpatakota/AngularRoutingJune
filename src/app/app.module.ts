import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router'
import { SchoolComponent } from './school/school.component';
import { SchoolinformationComponent } from './school/schoolinformation/schoolinformation.component';
import { CommonModule } from '@angular/common';


// https://github.com/marketplace    -- ActivatedURL
// https://github.com
// /marketplace                      -- path
// based on the path we are configure the comp
// localhost:4200/school
// path : "school" , component:schoolcomponent   -- oneRoute
// path : "BusDriver" , component:BusDriverComponent   -- secondRoute
// mulitple routes
  
   //http://localhost:4200/school/xyz123
  // Cannot match any routes. URL Segment: 'school/schoolinformation'
  const routes:Routes = [
    { path:'school' , component:SchoolComponent},
    //{ path:'schoolinformation' , component:SchoolinformationComponent}
    { path:'schoolinformation/:any' , component:SchoolinformationComponent}
  ];
   // { path:'schoolinformation/:any' , component:SchoolinformationComponent}];
  // i did reservation.... but i need to alocate the seat for the schoolcomponent....
  


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolinformationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
