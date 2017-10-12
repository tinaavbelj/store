import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BasketService } from '../../services/basket.service';
import { Basket } from '../../models/basket';
import { Item } from '../../models/item';

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
    title: string = 'basket';
    basket: Basket;
    totalPrice: number = 0.0;
    onBasketChangeSubscription: Subscription;

    constructor(
        private router: Router,
        private basketService: BasketService
    ) {
        this.onBasketChangeSubscription = this.basketService.getOnBasketChange().subscribe(value => {
            this.basket = value.basket;
            this.totalPrice = value.totalPrice;
        });
    }

    ngOnInit(): void {
        this.basketService.getBasket().subscribe((basket: Basket) => {
            this.basket = basket;
        });

        this.basketService.getTotalPrice().subscribe((totalPrice: number) => {
            this.totalPrice = totalPrice;
        });
    }

    removeItem(item: Item): void {
        this.basketService.removeItem(item);
    }

    checkout() {
        this.basketService.clearBasket();
        this.router.navigateByUrl('/dashboard');
    }

    ngOnDestroy(): void {
        this.onBasketChangeSubscription.unsubscribe();
    }
}
