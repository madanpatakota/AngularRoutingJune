import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { SchoolinformationComponent } from './school/schoolinformation/schoolinformation.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule}  from '@angular/forms'
import { CanActivateGuardGuard } from './can-activate-guard.guard';




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

/// right now i have done parent level security
//// i want to add the some more security to the child level also......
const routes: Routes = [{path:'',component:LoginComponentComponent},
  {
    path: 'school',
    component: SchoolComponent,
    canActivate : [CanActivateGuardGuard],
    children: [
      {
        path: 'schoolinformation/:any',
        component: SchoolinformationComponent,
      },
      {
        path: 'schoolinformation1/:any',
        component: SchoolinformationComponent,
      },
      {
        path: 'schoolinformation2/:any',
        component: SchoolinformationComponent,
      },
    ],
  },
  // { path:'schoolinformation' , component:SchoolinformationComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
  // { path:'schoolinformation/:any' , component:SchoolinformationComponent}
];
// { path:'schoolinformation/:any' , component:SchoolinformationComponent}];
// i did reservation.... but i need to alocate the seat for the schoolcomponent....

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolinformationComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
