import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdminComponent } from './my-admin.component';
import { AdminComponent } from '../admin/admin.component';
import { adminguardGuard } from '../../guard/adminguard.guard';
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import {UpdatedoctorComponent} from './updatedoctor/updatedoctor.component';
const routes: Routes = [
  
  {
    path:'',
    component:MyAdminComponent,
    canActivate:[adminguardGuard]
  },
  {
    path:'my-admin/mydoctors',
    component:MydoctorsComponent,
   
  },
  {
    path:'my-admin/Adddoctors',
    component:AddDoctorComponent,
   
  },
  {
    path:'DeleteDoctor/:id',
    component:DeleteDoctorComponent,
    
  },
  {
    path:'UpdateDOctor/:id',
    component:UpdatedoctorComponent,
    canActivate:[adminguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdminRoutingModule { }
