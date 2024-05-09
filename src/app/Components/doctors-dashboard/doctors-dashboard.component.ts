import { Component, OnInit } from '@angular/core';
import { InputDecorator,Input } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import {Router} from '@angular/router';
import {DoctorsService} from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctors-dashboard',
  templateUrl: './doctors-dashboard.component.html',
  styleUrls: ['./doctors-dashboard.component.css']
})
export class DoctorsDashboardComponent implements OnInit {

  SpecialityId:number=0;
  DoctorsInfo:any;
  isShow:boolean=false;
  constructor(public Api:ApiserviceService,public route:Router,public dctrServ:DoctorsService){

}


doctorSpeciality=(localStorage.getItem('DoctorId'));

ngOnInit(): void {
 console.log(this.doctorSpeciality); 
 if(this.doctorSpeciality!=null){
this.SpecialityId=parseInt(this.doctorSpeciality);
 }

 this.Api.GetDoctorsBySpeciality(this.SpecialityId).subscribe((data)=>{
    
  this.DoctorsInfo=data;    
  console.log(this.DoctorsInfo);
})
 
}

clickMe(){
  this.Api.GetDoctorsBySpeciality(this.SpecialityId).subscribe((data)=>{
    
    this.DoctorsInfo=data;    
    console.log(this.DoctorsInfo);
  })
}
filteredValue:any;
SpecificDoctor(id:any){
console.log(id);
this.filteredValue=this.DoctorsInfo.filter((s:any)=>{
return s.doctorId===id;
})
console.log(this.filteredValue[0]);
this.dctrServ.setData(this.filteredValue[0]);

this.route.navigate(['/BookAppointment']);
}
but(){
  alert("ai");
}
OnClickMethod(){
  this.isShow=true;
}

}
