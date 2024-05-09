import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AdminApiService } from 'src/app/services/admin-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.css']
})
export class NavBarHeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
   nav:any={
    title:'',
    Link:''
  } 
userrole:any;
role:any;
ParsingRole:any=null;  
constructor(public Api:AdminApiService,public route:Router){
    
 
  }



  ngOnInit(): void {
    this.userrole=localStorage.getItem("UserDetails");
    if(this.userrole!=null)
    this.ParsingRole=JSON.parse(this.userrole);
  if(this.ParsingRole.Role!=null && this.ParsingRole.Role!=undefined){
    this.role=this.ParsingRole.Role;
  }
    
    console.log(this.role);
  this.isLoggedIn=this.Api.GetIsLogged();
  if(this.isLoggedIn){
    this.nav.title="Logout",
    this.nav.Link='/'
  }
  
  }
  Logout(){
    if(this.isLoggedIn){
      this.Api.IsLogged(false);
      localStorage.removeItem("UserDetails");
      this.route.navigate(['/']);
      
    }
  }
  


}
