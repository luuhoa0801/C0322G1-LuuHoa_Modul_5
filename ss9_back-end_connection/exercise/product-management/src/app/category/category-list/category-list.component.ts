import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  valueDelete = [];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // @ts-ignore
  getAll() {
    return this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    }, error => {
    });
  }

  selDelete(id: number, name: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(name);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.router.navigateByUrl('category/list');
    });
  }
}
