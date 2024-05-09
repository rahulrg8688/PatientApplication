import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  patientForm:FormGroup;
  PatientHistory:any;
  ErrorMsg='';

  constructor(public fb:FormBuilder,public Api:AdminApiService)
  {
    this.patientForm=this.fb.group({
      patientName:['',Validators.required],
      patientEmail:['',Validators.required],
      patients:this.fb.array([this.patientHistory()])
    })
  }

  ngOnInit(): void {
    
  }
  patientHistory():FormGroup{
    return this.fb.group({
      name:[''],
      
    })

  }
  get patients():any{
    return this.patientForm.get('patients');
  }

  removePatient(i:any){
    this.patients.removeAt(i);

  }

  GetHistory(){
   console.log(this.patientForm.value.patientName);
   const data={
    Username:this.patientForm.value.patientName,
    Email:this.patientForm.value.patientEmail
   }
    this.Api.PatientHistory(data).subscribe((res:any)=>{
      console.log(res);
      if(res.status==1){
        this.PatientHistory=res.retval
      }
      else if(res.status==0){
        this.ErrorMsg="Not Found Data";
      }
    })
    
  }
}
