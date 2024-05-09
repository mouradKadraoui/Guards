import { Component } from '@angular/core';
import { User } from './user.model';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private auth : AuthServiceService , private router : Router){}

  authenticated(email : string , password : string){
  const user = { email , password }
  if(this.auth.isAuthenticated(user)){
    this.router.navigate(['/dashboard'])
  }
  else this.router.navigate(['/login'])
  }


}
