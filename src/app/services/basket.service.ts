import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { StorageService } from '../services/storage.service';
import { Basket } from '../models/basket';
import { Item } from '../models/item';

@Injectable()
export class BasketService {
    private basketChange = new Subject<any>();

    constructor(
        private storageService: StorageService
    ) { }

    getBasket(): Observable<Basket> {
        let basket: Basket = this.storageService.getBasket();
        return Observable.of(basket);
    }

    getTotalPrice(): Observable<number> {
        let basket: Basket = this.storageService.getBasket();
        let totalPrice: number = this.calculateTotalPrice(basket);
        return Observable.of(totalPrice);
    }

    addItem(item: Item): void {
        let basket: Basket = this.storageService.getBasket();
        basket.items.push(item);
        this.storageService.setBasket(basket);
        this.setOnBasketChange(basket);
    }

    removeItem(item: Item): void {
        let basket: Basket = this.storageService.getBasket();
        let newBasket: Basket = new Basket();
        for (let i = 0; i < basket.items.length; i++) {
            if (basket.items[i].id !== item.id) {
                newBasket.items.push(basket.items[i]);
            }
        }
        this.storageService.setBasket(newBasket);
        this.setOnBasketChange(newBasket);
    }

    clearBasket(): void {
        let newBasket: Basket = new Basket();
        this.storageService.setBasket(newBasket);
        this.setOnBasketChange(newBasket);
    }

    setOnBasketChange(basket: Basket): void {
        let totalPrice: number = this.calculateTotalPrice(basket);
        this.basketChange.next({ basket: basket, totalPrice: totalPrice });
    }

    getOnBasketChange(): Observable<any> {
        return this.basketChange.asObservable();
    }

    private calculateTotalPrice(basket: Basket): number {
        let totalPrice: number = 0.0;
        for (let i = 0; i < basket.items.length; i++) {
            totalPrice += basket.items[i].price;
        }
        return totalPrice;
    }
}
