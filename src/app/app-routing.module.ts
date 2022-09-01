import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'dashboard', component:DashboardComponent },
{
  path: 'login',
  component: LoginComponent,
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
},
{
  path: "**",
  component: ErrorComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
