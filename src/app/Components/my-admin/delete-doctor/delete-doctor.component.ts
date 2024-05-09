import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminApiService} from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {
DoctorId:any;
AllDoctors:any;
DoctorById:any;
DeleteMsg:any;
  constructor(private route:ActivatedRoute,public Api:AdminApiService){

  }

  ngOnInit(): void {
  
    this.route.paramMap.subscribe((params)=>{
       let DoctId=params.get('id');
       
       if(DoctId!=null){
       this.DoctorId=parseInt(DoctId);
        console.log("DoctId"+parseInt(DoctId));
      this.Api.GetDoctorById(parseInt(DoctId)).subscribe((res:any)=>{
        this.DoctorById=(res[0]);
      })
       }
      
    })
    
    
  }
  Delete(){

    let conf=confirm("Are you want to delele");
    if(conf){
      this.Api.DeleteDoctor(this.DoctorId).subscribe((res:any)=>{
        console.log(res);
        this.DeleteMsg=res.message
      })
      }
    
    
  }
 
  

}
