import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AdminApiService} from 'src/app/services/admin-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-admin-login',
  templateUrl: './user-admin-login.component.html',
  styleUrls: ['./user-admin-login.component.css']
})
export class UserAdminLoginComponent {

  IsFormSubmitted:boolean=false;
  IsvalidUsername:boolean=false;
  InsertSuccessMsg:any;
  clr={red:false,green:false};
  Dupmsg:any;
constructor(public fb:FormBuilder,public Api:AdminApiService,public route:Router){}

LoginForm=this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]],
  mailId:['',[Validators.required]],
  MobileNum:['',[Validators.required]],
  Role:['',[Validators.required]]
})

valDup(data:any){
console.log(data.value);
this.Api.FindDuplicate(data.value).subscribe((res:any)=>{
  console.log(res);
  if(res.status==1){
    this.Dupmsg=res.message;
    this.clr={red:true,green:false}
    this.IsvalidUsername=false;
  }
  else{
    this.IsvalidUsername=true;
    this.Dupmsg=res.message;
    this.clr={red:false,green:true}
  }
  

})
}

Login(){
  this.IsFormSubmitted=true;
  if(this.IsvalidUsername){
    const data={
      username:this.LoginForm.value.username,
      password:this.LoginForm.value.password,
      role:this.LoginForm.value.Role,
      mobileNumber:this.LoginForm.value.MobileNum,
      mailId:this.LoginForm.value.mailId
    }
    this.Api.InsertUserAdmin(data).subscribe((res:any)=>{
      console.log(res);
      if(res.status==1){
        
        this.InsertSuccessMsg=res.message;
        this.InsertSuccessMsg+="Plz wait redirecting to Login Page"
        this.clr={green:true,red:false};
        alert(this.InsertSuccessMsg);
        this.route.navigate(['/Admin']);
        
      }
      else{
        this.InsertSuccessMsg=res.message;
        this.clr={red:true,green:false};
      }
      
    })
  console.log(this.LoginForm);
  }
}
}
