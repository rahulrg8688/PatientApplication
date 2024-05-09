import { CanActivateFn,Router,UrlTree } from '@angular/router';
//import {routes} from 'src/app/Components/my-admin/my-admin-routing.module';


export const adminguardGuard: CanActivateFn = (route, state) => {
const role=route.paramMap;
console.log(role);
const router=new Router();
  var UserDetails=localStorage.getItem(('UserDetails'));
  if(UserDetails!=null){
  var ParsedUserDetails=JSON.parse(UserDetails);
  console.log(ParsedUserDetails);
  }
  if(ParsedUserDetails!=null && ParsedUserDetails.Role==="user"){
    router.navigate(['/register']);
    return true;
  }
  else if(ParsedUserDetails!=null && ParsedUserDetails.Role==="admin"){
    
    
     // Adjust the redirection URLs as needed
  return true;
  }
  else{
    router.navigate(['/']);
  return false;
  }
  }
  
  
