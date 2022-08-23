import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

  private getProduct(id: number) {
    this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name.id),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }


  updateProduct(id: number) {
    const product = this.productForm.value;
    this.categoryService.findById(parseInt(this.productForm.value.name)).subscribe(next => {
      product.name = next;
      this.productService.updateProduct(id, product).subscribe(() => {
        this.productForm.reset();
        alert(' Chinh sua thanh cong');
        this.router.navigateByUrl('/product/list');
      });
    });
  }
}
