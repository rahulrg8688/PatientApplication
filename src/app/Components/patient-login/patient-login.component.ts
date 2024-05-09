import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  DropDownSpeciality:any;
  IsFormSubmitted:any=false;
  doctorSpecialityId:Number=0;
  patientId:Number=0;
  constructor(public fb:FormBuilder,public Apis:ApiserviceService,public route:Router){}

  LoginForm=this.fb.group({
    patientName:[],
    patientMail:[],
    patientMobile:[],
    patientPreferedDoctor:[]
  })

  ngOnInit(): void {
    this.getSpeciality();
  }
  getSpeciality(){
    this.Apis.getSpecialitydropdown().subscribe((data:any)=>{
      this.DropDownSpeciality=data;
      if(data!=null){
        
      }
      console.log(this.DropDownSpeciality);
    })
  }

  Login(){
console.log(this.LoginForm.value);
if(this.LoginForm.value.patientPreferedDoctor){
this.doctorSpecialityId=parseInt(this.LoginForm.value.patientPreferedDoctor);
}
const data={
  patient_name:this.LoginForm.value.patientName,
  patient_Mobile:this.LoginForm.value.patientMobile,
  patient_mailId:this.LoginForm.value.patientMail,
  patient_PreferedSpeciality:this.doctorSpecialityId
}
    this.Apis.LoginPatient(data).subscribe((res:any)=>{
      console.log(res);
    this.patientId=res.retval.patient_id;
    console.log(this.patientId);
    this.Apis.SetPatientId(this.patientId);
    this.Apis.setMailid(res.retval.patient_mailId);
      if(res.status==1){
        alert("Login Success");
        this.route.navigate(['/Speciality',this.doctorSpecialityId]);
      }
    })
  }
}
