import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService  implements CanActivate {

  LoggedIn:boolean=false;
  Http:any="https://localhost:7103/api/Admin/"
  constructor(public Api:HttpClient) { }
  
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
return true;
}

IsLogged(data:any){
  this.LoggedIn=data;
}
GetIsLogged(){
  return this.LoggedIn;
}
FindDuplicate(data:any){
  return this.Api.get(this.Http+`FindDupUsername?Username=${data}`);
}
InsertUserAdmin(data:any){
  return this.Api.post(this.Http+"InsertAdminUser",data);
}
ValidateUserAdmin(data:any){
  return this.Api.post(this.Http+"ValidateUserAdmin",data);
}

  GetAlldoctors(){
   return this.Api.get(this.Http+"GetAllDoctors");
  }
  InsertDoctor(data:any){
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'charset': 'utf-8'
    });
    const options={headers:headers};
    return this.Api.post(this.Http+"AddDoctor",data,options);
  }
  GetDoctorById(data:any){
    return this.Api.get(this.Http+`GetDoctor?Id=${data}`);
  }
  DeleteDoctor(data:any){
  //  https://localhost:7103/api/Admin/DeleteDoctor?Id=202
    return this.Api.delete(this.Http+`DeleteDoctor?Id=${data}`);
  }
  UpdateDoctor(data:any){
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'charset':'utf-8'
    });
    const options={headers:headers};
    return this.Api.patch(this.Http+"UpdateDoctor",data,options);
  }
  PatientHistory(data:any){
    return this.Api.get(this.Http+`PatientHistory?Username=${data.Username}&Email=${data.Email}`);
  }
}
