export class Item {
    id: number = 0;
    name: string = '';
    description: string = '';
    price: number = 0.0;
    categoryId: number = 0;

    static fromJson(el): Item {
        let item: Item = {
            id: el['id'],
            name: el['name'],
            description: el['description'],
            price: el['price'],
            categoryId: el['categoryId']
        }
        return item;
    }
}
