export class Category {
    id: number = 0;
    name: string = '';

    static fromJson(el): Category {
        let category: Category = {
            id: el['id'],
            name: el['name']
        }
        return category;
    }
}
