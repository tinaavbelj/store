import { Item } from '../models/item'

export class Basket {
    items: Item[] = [];

    static fromJson(el): Basket {
        let basket: Basket = new Basket();
        let arr = el.items;
        arr.forEach(el => {
            let item: Item = Item.fromJson(el);
            basket.items.push(item);
        });
        return basket;
    }
}
