import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { NavBarHeaderComponent } from './Components/nav-bar-header/nav-bar-header.component';
import { DoctorsDashboardComponent } from './Components/doctors-dashboard/doctors-dashboard.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { AdminComponent } from './Components/admin/admin.component';
import { PatientLoginComponent } from './Components/patient-login/patient-login.component';
import { DoctorsSpecialityComponent } from './Components/doctors-speciality/doctors-speciality.component';
import { UserAdminLoginComponent } from './Components/user-admin-login/user-admin-login.component';
import { HomeComponent } from './Components/home/home.component';
import { PatientHistoryComponent } from './Components/patient-history/patient-history.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarHeaderComponent,
    DoctorsDashboardComponent,
    AppointmentComponent,
    AdminComponent,
    PatientLoginComponent,
    DoctorsSpecialityComponent,
    UserAdminLoginComponent,
    HomeComponent,
    PatientHistoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
