import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { ApiserviceService } from 'src/app/services/apiservice.service';
import {DoctorsService} from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctors-speciality',
  templateUrl: './doctors-speciality.component.html',
  styleUrls: ['./doctors-speciality.component.css']
})
export class DoctorsSpecialityComponent implements OnInit {
  @Input() id!:any
  
  DoctorsInfo:any;
  filteredValue:any;
  constructor(public router:Router,public ActiveRoute:ActivatedRoute,public Api:ApiserviceService,public dctrServ:DoctorsService){}

  ngOnInit(): void {
  console.log("Param"+this.id); 
    this.ActiveRoute.paramMap.subscribe((s:any)=>{
      let Id=s.get('id');
      console.log(Id);
      if(Id!=null){
        this.Api.GetDoctorsBySpeciality(parseInt(Id)).subscribe((res:any)=>{
          console.log(res);
          this.DoctorsInfo=res;
        })
      }
    })
  }
  SpecificDoctor(id:any){
    console.log(id);
    this.filteredValue=this.DoctorsInfo.filter((s:any)=>{
    return s.doctorId===id;
    })
    console.log(this.filteredValue[0]);
    this.dctrServ.setData(this.filteredValue[0]);
    
    this.router.navigate(['/BookAppointment']);
    }
    
  }

