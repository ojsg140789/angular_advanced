import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ],
  exports: [
    AppRoutingModule,
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ],
  imports: [ 
    AppRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
