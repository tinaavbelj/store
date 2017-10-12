import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BasketService } from './services/basket.service';
import { StorageService } from './services/storage.service';
import { Basket } from './models/basket';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title: string = 'app';
    totalPrice: number = 0.0;
    numberOfItems: number = 0;
    onBasketChangeSubscription: Subscription;

    constructor(
        private basketService: BasketService,
        private storageService: StorageService
    ) {
        this.onBasketChangeSubscription = this.basketService.getOnBasketChange().subscribe(value => {
            this.numberOfItems = value.basket.items.length;
            this.totalPrice = value.totalPrice;
        });
    }

    ngOnInit(): void {
        this.storageService.initialize();
    }

    ngOnDestroy(): void {
        this.onBasketChangeSubscription.unsubscribe();
    }
}
