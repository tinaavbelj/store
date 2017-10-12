import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BasketService } from '../../services/basket.service';
import { CategoryService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';
import { Category } from '../../models/category';
import { Item } from '../../models/item';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    title: string = 'dashboard';
    categories: Category[] = [];
    items: Item[] = [];
    search: string = '';
    selectedCategoryId: number = 0;
    onItemsChangeSubscription: Subscription;

    constructor(
        private basketService: BasketService,
        private categoryService: CategoryService,
        private itemService: ItemService
    ) {
        this.onItemsChangeSubscription = this.itemService.getOnItemsChange().subscribe(value => {
            this.items = value.items;
        });
    }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
        });

        this.itemService.getItems().subscribe((items: Item[]) => {
            this.items = items;
        });
    }

    filterItems(): void {
        this.itemService.filterByName(this.search);
    }

    selectCategory(id: number): void {
        this.search = '';
        this.selectedCategoryId = id;
        this.itemService.filterByCategory(id);
    }

    removeItem(item: Item): void {
        this.search = '';
        this.selectedCategoryId = 0;
        this.itemService.removeItem(item);
    }

    addToCart(item: Item): void {
        this.basketService.addItem(item);
    }

    ngOnDestroy(): void {
        this.onItemsChangeSubscription.unsubscribe();
    }
}
