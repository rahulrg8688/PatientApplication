import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
patientId:Number=0;
MailId:string='';
  constructor(public Http:HttpClient) 
  { 

  }

  public countryApis:any="https://localhost:7103/api/";

  getCountryDropDown(){
    return this.Http.get(this.countryApis+"Country");
  }
  getStateDropdown(Id:any){
    return this.Http.get(this.countryApis+`Country/GetStateById/${Id}`);
  }
  getCityDropdown(Id:any){
    return this.Http.get(this.countryApis+`Country/GetCity/${Id}`);
  }
  getSpecialitydropdown(){
    return this.Http.get(this.countryApis+"PatientRegister/DoctorSpeciality");
  }
  insertPatient(data:any){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    });
    const options={headers:headers};
    return this.Http.post(this.countryApis+"PatientRegister/create",data,options);
  }
  GetDoctorsBySpeciality(data:any){
    return this.Http.get(this.countryApis+"PatientRegister/DoctorBySpeciality?id="+data);
  }
  AddAppointment(data:any){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    });
    const options={headers:headers};
    return this.Http.post(this.countryApis+"PatientRegister/AddAppointment",data,options);
  }
  sendMailAppointmentDetails(Email:string,Did:Number,Pid:Number){
    const data={Email:Email,Did:Did,Pid:Pid};
  return this.Http.post(this.countryApis+"PatientRegister/SendMessage",data);
  }
  ValidateAdmin(data:any){
    return this.Http.post(this.countryApis+"PatientRegister/Admin",data);
  }

  LoginPatient(data:any){
    return this.Http.post(this.countryApis+"PatientRegister/ExistingUser",data);
  }
  SetPatientId(data:any){
this.patientId=data;
  }
  getPatientId(){
    return this.patientId;
  }
  setMailid(data:any){
    this.MailId=data;
  }
  GetMailId(){
    return this.MailId;
  }
}
