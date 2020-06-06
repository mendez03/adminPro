import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficos1Component
    ],
     exports: [
        DashboardComponent,
        ProgressComponent,
        Graficos1Component
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})


export class PagesModule { }
