import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { NoAuthGuardService } from './guards/no-auth-guard.service';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  { path : 'add' , component : AddComponent},
  { path : 'login' ,component : UserComponent , canActivate : [NoAuthGuardService] },
  { path : 'dashboard' , component : DashboardComponent , canActivate : [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
