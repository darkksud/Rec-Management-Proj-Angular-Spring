import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { RecruitmentDashboardComponent } from './recruitment-dashboard/recruitment-dashboard.component';

import { LoginComponent } from './login/login.component';

 

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'recruitment-dashboard', component:RecruitmentDashboardComponent},

  {path: 'manager-dashboard', component:ManagerDashboardComponent},

  {path: 'login', component:LoginComponent}

];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }

