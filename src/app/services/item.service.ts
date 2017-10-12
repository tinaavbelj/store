import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { StorageService } from './storage.service';
import { Category } from '../models/category';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
    private itemsChange = new Subject<any>();

    constructor(
        private storageService: StorageService
    ) { }

    getItems(): Observable<Item[]> {
        let items: Item[] = this.storageService.getItems();
        return Observable.of(items);
    }

    getItem(id: number): Observable<Item> {
        let items: Item[] = this.storageService.getItems();
        let item: Item = new Item();
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                item = items[i];
                break;
            }
        }
        return Observable.of(item);
    }

    addItem(item: Item): void {
        let items: Item[] = this.storageService.getItems();
        let lastId = items[items.length - 1].id;
        item.id = lastId + 1;
        items.push(item);
        this.storageService.setItems(items);
        this.setOnItemsChange(items);
    }

    removeItem(item: Item): void {
        let items: Item[] = this.storageService.getItems();
        let newItems: Item[] = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].id !== item.id) {
                newItems.push(items[i]);
            }
        }
        this.storageService.setItems(newItems);
        this.setOnItemsChange(newItems);
    }

    filterByName(search: string): void {
        let items: Item[] = this.storageService.getItems();
        let newItems: Item[] = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase().startsWith(search.toLowerCase())) {
                newItems.push(items[i]);
            }
        }
        this.setOnItemsChange(newItems);
    }

    filterByCategory(id: number): void {
        let items: Item[] = this.storageService.getItems();
        let newItems: Item[] = [];
        if (id === 0) {
            newItems = items;
        } else {
            for (let i = 0; i < items.length; i++) {
                if (items[i].categoryId === id) {
                    newItems.push(items[i]);
                }
            }
        }
        this.setOnItemsChange(newItems);
    }

    setOnItemsChange(items: Item[]): void {
        this.itemsChange.next({ items: items });
    }

    getOnItemsChange(): Observable<any> {
        return this.itemsChange.asObservable();
    }
}
