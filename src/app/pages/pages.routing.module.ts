import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart1Component } from './chart1/chart1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
            { path: 'chart1', component: Chart1Component, data: { title: 'Chart'} },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
            { path: 'account-settings', component: AccountSettingComponent, data: { title: 'Settings'} },
            { path: 'promises', component: PromisesComponent, data: { title: 'Promises'} },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS'} }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
