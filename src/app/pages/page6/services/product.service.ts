import {Injectable} from '@angular/core';
import { Product } from './product.model';

const PRODUCTS = [
  {"id": 1, "name": "Bag of suck", "price": 100, "details": "You don't want to own this!"},
  {"id": 2, "name": "Bag of luck", "price": 200, "details": "You might want to own this!"},
  {"id": 3, "name": "Bag of fuck", "price": 300, "details": "You really want to own this!"}
];

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}