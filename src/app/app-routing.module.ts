import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './Components/register/register.component';
import { DoctorsDashboardComponent } from './Components/doctors-dashboard/doctors-dashboard.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { AdminComponent } from './Components/admin/admin.component';
import {adminguardGuard} from './guard/adminguard.guard'
import {PatientLoginComponent} from './Components/patient-login/patient-login.component';
import {DoctorsSpecialityComponent} from './Components/doctors-speciality/doctors-speciality.component';
import { UserAdminLoginComponent } from './Components/user-admin-login/user-admin-login.component';
import {HomeComponent} from './Components/home/home.component';
import { PatientHistoryComponent } from './Components/patient-history/patient-history.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"userAdminLogin",
    component:UserAdminLoginComponent

},
  {
    path:"register",
    component:RegisterComponent

},
{
  path:"DoctorsDashboard",
  component:DoctorsDashboardComponent
},
{
  path:"BookAppointment",
  component:AppointmentComponent
},
{
path:"Admin",
component:AdminComponent,

},
{
  path:"patientLogin",
  component:PatientLoginComponent,
},
{
  path:"patientHistory",
  component:PatientHistoryComponent
},
{
  path:"Speciality/:id",
  component:DoctorsSpecialityComponent
},
{
  path:"my-admin",
  loadChildren:()=>import('./Components/my-admin/my-admin.module').then(e=>e.MyAdminModule),
  canActivate:[adminguardGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
