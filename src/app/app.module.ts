import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BasketComponent } from './components/basket/basket.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BasketService } from './services/basket.service';
import { CategoryService } from './services/category.service';
import { ItemService } from './services/item.service';
import { StorageService } from './services/storage.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        BasketComponent,
        AddItemComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFontAwesomeModule
    ],
    providers: [
        BasketService,
        CategoryService,
        ItemService,
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
