import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    // @ts-ignore
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    // @ts-ignore
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    // @ts-ignore
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    // @ts-ignore
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    // @ts-ignore
    description: 'Like new'
  }];

  constructor() {
  }

  getAll():Product[] {
    return this.products;
  }

  saveProduct(product):void {
     this.products.push(product);
  }

  findById(id: number):Product {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product):Product {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
    return product;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
