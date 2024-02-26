import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrerComponent } from './auth/registrer/registrer.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Chart1Component } from './pages/chart1/chart1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'chart1', component: Chart1Component},
      { path: 'progress', component: ProgressComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'registrer', component: RegistrerComponent},
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
