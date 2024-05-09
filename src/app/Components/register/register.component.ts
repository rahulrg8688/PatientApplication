import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from 'src/app/services/apiservice.service'
import { FormBuilder,FormArray,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  IsLoggedIn:boolean=false;
IsFormSubmitted:boolean=false;
  DropCountryValues:any;
   SelectedCountry:any;
   DropStateValues:any;
   SelectedState:any;
   SelectedCity:any;
   DropCityValues:any;
    patientSuccessMsg:any;
    clr1={red:true}
   
    DropDownSpeciality:any;
   Visits:any=[
    {
      visit:'1'
    },
    {visit:'2'},
    {visit:'3'},
    {visit:'Follow Up'}
   ]
clr:any={green:false,red:false}
  
  constructor(public Apis:ApiserviceService,public fb:FormBuilder,public route:Router){
    this.getCountry();
  
  
  }
  pattern='^[a-zA-Z]+$';
  patientRegForm=this.fb.group({
    patientId:[''],
    patientName:['',[Validators.required,Validators.pattern(this.pattern)]],
    patientDob:['',[Validators.required]],
    patientMail:['',[Validators.required,Validators.email]],
    patientMobile:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
    patientGender:['',[Validators.required]],
    patientAddress:['',[Validators.required]],
    patientCountry:['',[Validators.required]],
    patientState:['',[Validators.required]],
    patientCity:['',[Validators.required]],
    patientSpeciality:['',[Validators.required]],
    patientVisit:['',[Validators.required]],


  })

ngOnInit(): void {
  this.IsLoggedIn=true;
  console.log("Oninit");
  this.getCountry();
  this.getSpeciality();
}

getSpeciality(){
  this.IsLoggedIn=true;
  this.Apis.getSpecialitydropdown().subscribe((data:any)=>{
    this.DropDownSpeciality=data;
    if(data!=null){
      
    }
    console.log(this.DropDownSpeciality);
  })
}

  getCountry(){
    this.Apis.getCountryDropDown().subscribe((data:any)=>{
      
      this.DropCountryValues=data;
console.log(this.DropCountryValues)
    })
  }
  DropCountry(){
    console.log(this.SelectedCountry);
    this.getStateById(this.SelectedCountry);
  }

  getStateById(Id:any){
 
    this.Apis.getStateDropdown(Id).subscribe((data:any)=>{
      console.log(data);
      this.DropStateValues=data;
    })
  }
  getCityById(Id:any){
    this.Apis.getCityDropdown(Id).subscribe((data:any)=>{
      console.log(data);
      this.DropCityValues=data;
    })
  }
  DropState(){

    this.getCityById(this.SelectedState);
  }
  
  Register(){
    console.log(this.patientRegForm);
    
   this.IsFormSubmitted=true;
    
    if(this.IsFormSubmitted){
    let patient={
     patient_name:this.patientRegForm.value.patientName,
     patient_dob:this.patientRegForm.value.patientDob,
     patient_Mobile:this.patientRegForm.value.patientMobile,
     patient_mailId:this.patientRegForm.value.patientMail,
     patient_PreferedSpeciality:this.patientRegForm.value.patientSpeciality,
     patient_Country:this.patientRegForm.value.patientCountry,
     patient_State:this.patientRegForm.value.patientState,
     patient_city:this.patientRegForm.value.patientCity,
     patient_address:this.patientRegForm.value.patientAddress,
     patient_visit:this.patientRegForm.value.patientVisit,
      patient_gender:this.patientRegForm.value.patientGender

    }
    
    this.Apis.insertPatient(patient).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('patientId',res.patientId);
      this.Apis.SetPatientId(res.patientId);
      this.Apis.setMailid(res.patientMail);
      this.patientSuccessMsg=res.message;
      if(res.Statustext!=0){
        this.clr={green:true,red:false}
        if((this.patientRegForm.value.patientSpeciality!=null && this.patientRegForm.value.patientSpeciality!=undefined) && this.patientRegForm.value.patientMail!=null){
          localStorage.setItem("DoctorId",this.patientRegForm.value.patientSpeciality);
          localStorage.setItem("MailId",this.patientRegForm.value.patientMail);
          this.route.navigate(['/DoctorsDashboard']);
        }
        
      }
    
      else{
        this.clr={green:false,red:true}
      }
    })
  }
  }
}
