import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private SpecificDoctor:any
  constructor() { }

  setData(data:any){
this.SpecificDoctor=data;
  }
  getData(){
    return this.SpecificDoctor;
  }
}
