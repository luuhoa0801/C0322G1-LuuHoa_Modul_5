import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  id = 0;
  name = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): Product[] {
    return this.products = this.productService.getAll();
  }

  valueDelete(id: number, name: string): void {
    this.id = id;
    this.name = name;
  }

  delete(): void {
    this.productService.deleteProduct(this.id);
    this.products = this.productService.getAll();
  }
}
