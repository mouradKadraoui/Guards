import { Injectable } from '@angular/core';
import { User } from '../components/user/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  users : User[] = []


  constructor(private router : Router) {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  addUser(name: string, email: string, password: string) {
    const user = { name, email  , password };
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }



  isAuthenticated(user : User) : boolean{

  for(let i = 0 ; i < this.users.length ; i++){
    if(user.email == this.users[i].email && user.password ==this.users[i].password ){
      localStorage.setItem('auth',JSON.stringify(true))
      return true
    }
    else localStorage.setItem('auth',JSON.stringify(false))
  }
  return false
  }

  authenticated() : boolean{
  const auth = localStorage.getItem('auth')
  if(auth == null){
    return false
  }
  return JSON.parse(auth)
  }

  logOut(){
    localStorage.setItem('auth',JSON.stringify(false))
    this.router.navigate(['/login'])
  }
}
