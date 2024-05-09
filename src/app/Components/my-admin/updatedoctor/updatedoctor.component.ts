import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {AdminApiService} from 'src/app/services/admin-api.service'
@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  retData:any;
  FormUpdate:any;
  UpdateMsg:any;
  constructor(public fb:FormBuilder,private route:ActivatedRoute,private Api:AdminApiService){

  }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe((s:any)=>{
      let Id=s.get('id');
      console.log(Id);
      if(Id!=null){
        this.Api.GetDoctorById(parseInt(Id)).subscribe((res:any)=>{
          
          this.retData=res[0];
          console.log(this.retData);
          this.UpdateDoctor.patchValue({
          Id:this.retData.doctorId,
            Name:this.retData.doctorName,
            Fee:this.retData.fee,
            exp:this.retData.doctorExp,
            gen:this.retData.gender,
            spe:this.retData.specialities.specialityName
          })
          
        })
      }
     
    })
  }
  UpdateDoctor=this.fb.group({
    Id:[],
    Name:[Validators.required],
    Fee:[Validators.required],
    exp:[Validators.required],
    gen:[Validators.required],
    spe:[Validators.required]
  })
  
  Update(){
console.log(this.UpdateDoctor);
this.FormUpdate=this.UpdateDoctor.value;
console.log(this.FormUpdate);
const data={
  doctorId:this.FormUpdate.Id,
  doctorName:this.FormUpdate.Name,
  Fee:this.FormUpdate.Fee,
  doctorExp:this.FormUpdate.exp,
  Gender:this.FormUpdate.gen,
  
}
this.Api.UpdateDoctor(data).subscribe((res:any)=>{
  console.log(res);
  if(res.status==1){
    this.UpdateMsg=res.message;
  }
  else{
    this.UpdateMsg=res.message;
  }
})
}
  

}
