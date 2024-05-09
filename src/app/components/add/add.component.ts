import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  
  constructor(private auth : AuthServiceService , private router : Router){

  }

  ngOnInit(): void {

  }



  addUser(name : string , email : string , password : string){
  this.auth.addUser(name,email,password)
  this.router.navigate(['/login'])
  }
}
