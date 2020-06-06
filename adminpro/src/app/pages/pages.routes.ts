import {RouterModule, Routes} from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';


const pagesRoutes: Routes = [

    { path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graficos1', component: Graficos1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);