import { Component } from '@angular/core';
import {Router} from "@angular/router"; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navs:any=[
    {
      title:"Admin",
      url:''
    },
    {
      title:"doctors",
      url:'/my-admin/mydoctors'
    },
    {
      title:"Add patient",
      url:'/register'
    }
  ]

  constructor(public route:Router){

  }

  Logout(){
    localStorage.removeItem("UserDetails");
    
  }
}
