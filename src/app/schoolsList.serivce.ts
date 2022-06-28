import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SchoolsListService {
  schoolsList = [
    {
      Name: 'Kidzee',
      Location: 'HSR',
      ID: 'xyz123',
    },
    {
      Name: 'EuroKids',
      Location: 'SilkBoard',
      ID: 'abc123',
    },
    {
      Name: 'DelhiPublicSchool',
      Location: 'Kormangla',
      ID: 'def123',
    },
  ];


  getSchoolsDetails = [ 
    {ID:'def123', PrinicipleName:"NarayanaMoorthy" , studentsCount : 200 , EstablishDate: 1990} ,
    {ID:'abc123', PrinicipleName:"Ramachandrudu" , studentsCount : 210 , EstablishDate: 2000},
    {ID:'xyz123', PrinicipleName:"Prathapudu" , studentsCount : 180 , EstablishDate: 1995}
  ];
    
  getSchoolsList() {
    return this.schoolsList;
  }


  //forexample abc123
//   getSchoolDetailsByID(schoolID){

//   }


}
