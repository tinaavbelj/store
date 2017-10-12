import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BasketComponent } from './components/basket/basket.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'basket',
        component: BasketComponent
    },
    {
        path: 'add-item',
        component: AddItemComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
