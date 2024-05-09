import { Component, OnInit } from '@angular/core';
import {AdminApiService} from 'src/app/services/admin-api.service';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mydoctors',
  templateUrl: './mydoctors.component.html',
  styleUrls: ['./mydoctors.component.css']
})
export class MydoctorsComponent implements OnInit {
  doctorDetails:any;
  doctorSpeciality:any;
  SelectedSpeciality:any;
  filteredDoctors:any;
  dropTouched:boolean=false;
constructor(public api:AdminApiService,public doctorapi:ApiserviceService,public route:Router){
}

ngOnInit(): void {
  this.getAlldoctors();
this.getDoctorSpecilaity();
}

filterSpecilaity(){
  console.log(this.SelectedSpeciality);
  this.dropTouched=true;
  if(this.SelectedSpeciality!="--select--"){
  let filteredSpeciality= this.doctorDetails.filter((s:any)=>{
    return s.doctorSpeciality==this.SelectedSpeciality;
  })

  this.filteredDoctors=filteredSpeciality;
  console.log(filteredSpeciality);
}
if(this.SelectedSpeciality=="--select--"){
  this.dropTouched=false;
}
}
getAlldoctors(){
  this.api.GetAlldoctors().subscribe((res:any)=>{
    console.log(res);
    this.doctorDetails=res;
  })
}
getDoctorSpecilaity(){
  this.doctorapi.getSpecialitydropdown().subscribe((res:any)=>{
    console.log(res);
    this.doctorSpeciality=res;
  })
}
Adddoctor(){
this.route.navigate(['/my-admin/Adddoctors'])
}
Delete(Id:any){
alert(Id);
this.route.navigate(['/my-admin/DeleteDoctor',Id])
}
Update(Id:any){
this.route.navigate(['/my-admin/UpdateDOctor',Id])
}
}
