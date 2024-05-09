import { Injectable } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService : AuthServiceService , private router : Router) { }

  canActivate(): boolean {
  if(this.authService.authenticated()){
    return true
  }
  else{
    this.router.navigate(['/login'])
    return false
  }
  }
}
