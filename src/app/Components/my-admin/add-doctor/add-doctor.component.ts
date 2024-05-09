import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { FormBuilder,Validators } from '@angular/forms';
import {AdminApiService} from 'src/app/services/admin-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  clr={red:true}
  DoctorSpeciality:any;
  AddedMsg:any;
constructor(public doctorapi:ApiserviceService,public AdminApi:AdminApiService,public fb:FormBuilder,public Route:Router){

}
pattern="^[a-z A-Z]+$";
AddDoctor=this.fb.group({
  DoctName:['',[Validators.required,Validators.pattern(this.pattern)]],
  DoctSpecalityId:['',[Validators.required]],
  DoctFee:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
  DoctGender:['',[Validators.required]],
  DoctExp:['',[Validators.required]]
})

ngOnInit(): void {
  this.doctorapi.getSpecialitydropdown().subscribe((res:any)=>{
    console.log(res);
    this.DoctorSpeciality=res;
  })
}
InsertDetails(){
  console.log(this.AddDoctor.value);
  let data={
    doctorName:this.AddDoctor.value.DoctName,
    doctorSpeciality:this.AddDoctor.value.DoctSpecalityId,
    doctorExp:this.AddDoctor.value.DoctExp+"years",
    fee:this.AddDoctor.value.DoctFee,
    gender:this.AddDoctor.value.DoctGender
  }
this.AdminApi.InsertDoctor(data).subscribe((res:any)=>{
  console.log(res);
  this.AddedMsg=res.message;
  if(res.status>0){
this.Route.navigate(['/my-admin/mydoctors']);
  }
})
}

}
