import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdminRoutingModule } from './my-admin-routing.module';
import { MyAdminComponent } from './my-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { FormsModule } from '@angular/forms';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';

@NgModule({
  declarations: [
    MyAdminComponent,
    NavbarComponent,
    MydoctorsComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    UpdatedoctorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyAdminRoutingModule
  ]
})
export class MyAdminModule { }
