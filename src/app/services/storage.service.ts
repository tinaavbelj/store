import { Injectable } from '@angular/core';

import { Basket } from '../models/basket';
import { Category } from '../models/category';
import { Item } from '../models/item';
import { BASKET } from '../data/mock-basket';
import { CATEGORIES } from '../data/mock-categories';
import { ITEMS } from '../data/mock-items';

@Injectable()
export class StorageService {
    getBasket(): Basket {
        let basket: Basket = new Basket();
        let value = sessionStorage.getItem('basket');
        let el = JSON.parse(value);
        basket = Basket.fromJson(el);
        return basket;
    }

    setBasket(basket: Basket): void {
        sessionStorage.setItem('basket', JSON.stringify(basket));
    }

    getCategories(): Category[] {
        let categories: Category[] = [];
        let value = sessionStorage.getItem('categories');
        let arr = JSON.parse(value);
        arr.forEach(el => {
            let category: Category = Category.fromJson(el);
            categories.push(category);
        });
        return categories;
    }

    getItems(): Item[] {
        let items: Item[] = [];
        let value = sessionStorage.getItem('items');
        let arr = JSON.parse(value);
        arr.forEach(el => {
            let item: Item = Item.fromJson(el);
            items.push(item);
        });
        return items;
    }

    setItems(items: Item[]): void {
        sessionStorage.setItem('items', JSON.stringify(items));
    }

    initialize(): void {
        sessionStorage.setItem('basket', JSON.stringify(BASKET));
        sessionStorage.setItem('items', JSON.stringify(ITEMS));
        sessionStorage.setItem('categories', JSON.stringify(CATEGORIES));
    }
}
