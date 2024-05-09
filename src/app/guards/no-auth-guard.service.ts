import { Injectable } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService {

  constructor(private authService : AuthServiceService , private router : Router) { }

  canActivate(): boolean {
  if(this.authService.authenticated()){
    this.router.navigate(['/dashboard'])
    return false
  }
  else{
    return true
  }
  }
}
