import { Item } from '../models/item';
import { CATEGORIES } from './mock-categories';

export const ITEMS: Item[] = [
    { id: 1, name: 'Heels', description: 'Elegant shoes.', price: 89.99, categoryId: 1 },
    { id: 2, name: 'Mountain', description: 'Hiking shoes specifically designed for protecting the feet and ankles during outdoor walking activities.', price: 49.99, categoryId: 1 },
    { id: 3, name: 'Bombasto', description: 'Elegant shoes.', price: 56.99, categoryId: 1 },
    { id: 4, name: 'Celeritas', description: 'Running shoes.', price: 19.99, categoryId: 1 },
    { id: 5, name: 'Magneta', description: 'Hiking shoes.', price: 59.99, categoryId: 2 },
    { id: 6, name: 'Fast', description: 'Running shoes.', price: 69.99, categoryId: 2 },
    { id: 7, name: 'Dynama', description: 'Elegant shoes.', price: 82.99, categoryId: 2 },
    { id: 8, name: 'Dr IQ', description: 'Running shoes.', price: 79.99, categoryId: 3 },
    { id: 9, name: 'Magma', description: 'Hiking shoes.', price: 32.99, categoryId: 3 },
    { id: 10, name: 'Tornado', description: 'Running shoes.', price: 48.99, categoryId: 3 }
];
