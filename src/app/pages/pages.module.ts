import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingComponent } from './account-setting/account-setting.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent,
    AccountSettingComponent
  ],
  exports: [
    AppRoutingModule,
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent,
    AccountSettingComponent
  ],
  imports: [ 
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
