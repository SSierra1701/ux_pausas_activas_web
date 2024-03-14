import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegMejorasComponent } from './reg-mejoras/reg-mejoras.component';
import { RegDolenciasComponent } from './reg-dolencias/reg-dolencias.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'registro-mejoras', component: RegMejorasComponent},
  {path: 'registro-dolencias', component: RegDolenciasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
