import { Component } from '@angular/core';

@Component({
  selector: 'app-my-admin',
  templateUrl: './my-admin.component.html',
  styleUrls: ['./my-admin.component.css']
})
export class MyAdminComponent {
 AdminName=localStorage.getItem("username");
}
