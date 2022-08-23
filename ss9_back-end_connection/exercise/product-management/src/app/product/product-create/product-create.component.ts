import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      alert('Tạo thành công');
      this.productForm.reset();
      this.router.navigateByUrl('product/list');
    }, e => console.log(e));
  }
}
