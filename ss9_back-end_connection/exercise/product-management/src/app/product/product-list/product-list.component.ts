import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  valueDelete = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  selDelete(id: number, name: string): void {
    this.valueDelete.push(id);
    this.valueDelete.push(name);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigateByUrl('category/list');
    });
  }

  // valueDelete(id: number, name: string): void {
  //   this.id = id;
  //   this.name = name;
  // }
  // delete(): void {
  //   this.productService.deleteProduct(this.id);
  //   this.products = this.productService.getAll();
  // }
}
