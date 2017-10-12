import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';
import { Category } from '../../models/category';
import { Item } from '../../models/item';

import { BasketService } from '../../services/basket.service';
import { Basket } from '../../models/basket';

@Component({
    selector: 'add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    title: string = 'add-item';
    errors: string[] = [];
    categories: Category[];
    item: Item = new Item();

    constructor(
        private router: Router,
        private categoryService: CategoryService,
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
        });
    }

    addItem(): void {
        this.errors = [];

        if (!this.item.name) {
            this.errors.push('Name is required.');
        }
        if (!this.item.price) {
            this.errors.push('Price is required.');
        }
        if (this.item.categoryId === 0) {
            this.errors.push('Category is required.');
        }

        if (this.errors.length > 0) {
            return;
        }

        this.item.price = +this.item.price;
        this.itemService.addItem(this.item);
        this.router.navigateByUrl('/dashboard');
    }
}
