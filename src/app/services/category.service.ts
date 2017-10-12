import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { StorageService } from '../services/storage.service'
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    constructor(
        private storageService: StorageService
    ) { }

    getCategories(): Observable<Category[]> {
        let categories: Category[] = this.storageService.getCategories();
        return Observable.of(categories);
    }

    getCategory(id: number): Observable<Category> {
        let categories: Category[] = this.storageService.getCategories();
        let category: Category = new Category();
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === id) {
                category = categories[i];
                break;
            }
        }
        return Observable.of(category);
    }
}
