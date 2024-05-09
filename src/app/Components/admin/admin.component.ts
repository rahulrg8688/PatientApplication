import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import {Router} from '@angular/router'
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  clr={red:true}
  IsSubmit:boolean=false;
  UsernameErr:any='';
  passwrdErr:any='';
  
constructor(public fb:FormBuilder,public Api:AdminApiService,public route:Router){

}
AdminLogin=this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
})
Login(){
  this.IsSubmit=true;
  this.UsernameErr="";
  this.passwrdErr="";
  console.log(this.AdminLogin.value.username);
  const data={
    username:this.AdminLogin.value.username,
    password:this.AdminLogin.value.password,
    mailId:"",
    mobileNumber:0,
    role:""
  }
  this.Api.ValidateUserAdmin(data).subscribe((res:any)=>{
    console.log(res);
    if(res!=null &&res.status==3){
  alert("Successfully loggedin")
      var obj={
        Role:res.retval.Role,
        token:res.token,
        username:res.retval.username
      }
  if(res.retval.Role==="user"){
        localStorage.setItem("UserDetails",JSON.stringify(obj));
        this.Api.IsLogged(true);
        this.route.navigate(['/register'])
        
      }
      else if(res.retval.Role==="admin"){
        this.Api.IsLogged(true);
        localStorage.setItem("UserDetails",JSON.stringify(obj));
        this.route.navigate(['/my-admin'])
      }
    }
    
    else if(res.status==1){
//      this.IsloggedIn=false;
      this.UsernameErr="username doesnot exist";
    }
    else if(res.status==2){
      this.passwrdErr="Password didnot match";
    }

  })

  console.log(this.AdminLogin);
}
}
