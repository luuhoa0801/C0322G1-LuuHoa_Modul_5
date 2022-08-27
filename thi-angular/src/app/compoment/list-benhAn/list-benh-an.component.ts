import {Component, OnInit} from '@angular/core';
import {BenhAn} from "../model/benhAn";
import {BenhAnService} from "../service/benhAn.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-benh-an.component.html',
  styleUrls: ['./list-benh-an.component.css']
})
export class ListBenhAnComponent implements OnInit {
  benhAnList: BenhAn[] = [];
  id: number;
  maBenhAn: string;
  searchName: string;
  page = 0;
  previous: any;
  next:any;

  constructor(private benhAnService: BenhAnService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.benhAnService.getListBenhAn(this.page).subscribe((next: any) => {
      if (next !== undefined) {
        console.log(next)
        this.benhAnList = next.content;
      }

    }, error => {
      alert('loi')
    })
  }

  valueDelete(id: number, maBenhAn: string) {
    this.id = id;
    this.maBenhAn = maBenhAn;
  }

  delete(id) {
    this.benhAnService.deleteBenhAn(id).subscribe(next => {
      this.getAll();
      this.router.navigateByUrl('')
    })
  }

  search() {
    if (this.searchName === '') {
      alert('khong co gi de tim');
      this.ngOnInit();
    } else {
      console.log(this.searchName);
      this.benhAnService.searchBenhAn(this.searchName).subscribe(next => {
        if (next.length === 0) {
          alert('khong tim thay');
        }
        this.benhAnList = next.content;
      });
    }
  }

  nextPage() {
    this.page = this.page + 1;
    this.getAll();
  }

  previousPage() {
    this.page = this.page - 1;
    this.getAll();
  }
}
