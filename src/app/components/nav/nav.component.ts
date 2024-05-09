import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  user! : string

  constructor(private auth : AuthServiceService){}

  authenticate() : boolean{
  return  this.auth.authenticated()
  }

  logOut() {
    this.auth.logOut()
  }

}
