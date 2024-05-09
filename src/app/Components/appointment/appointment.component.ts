import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DoctorsService} from 'src/app/services/doctors.service';
import {ApiserviceService} from 'src/app/services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
AddedMsg:any;
patientId:Number=0;
Email:string='';
  data:any={
    appointmentDate:'',
    doctorId:'',
    patient_id:''
  }
  //Email:string='';
  clr:any={
    green:false,
    red:false

  }
  

  filteredValue:any;
  constructor(public route:ActivatedRoute,public router:Router,public DctrSer:DoctorsService,public Api:ApiserviceService){
this.patientId=this.Api.getPatientId();
this.Email=this.Api.GetMailId();  
}

  ngOnInit(): void {
   const data=this.DctrSer.getData();
 
this.filteredValue=data;
    console.log(this.filteredValue);
  }
  
  
  
  AddAppointment(){
    
    this.data.doctorId=this.filteredValue.doctorId;
    
      this.data.patient_id=this.patientId;
    

    console.log(this.data);
    
    this.Api.AddAppointment(this.data).subscribe((res:any)=>{
      console.log(res);
    
 

    
      if(res.statusText>0){
          this.AddedMsg="Appointment Booked";
          this.clr={green:true,red:false}
          if(this.Email!=null){
            this.Api.sendMailAppointmentDetails(this.Email,this.data.doctorId,this.data.patient_id).subscribe((res:any)=>{
              console.log(res);
              this.AddedMsg+=res;
              this.router.navigate(['/patientLogin']);
            })
     
          }
          }
      else{
        this.AddedMsg="Appointment not booked try Again";
        this.clr={green:true,red:false}
      }
    })
    
  }
  
  
}
