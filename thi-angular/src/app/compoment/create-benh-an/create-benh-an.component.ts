import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BenhNhan} from "../model/benhNhan";
import {BenhAnService} from "../service/benhAn.service";
import {BenhNhanService} from "../service/benhNhan.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-benh-an',
  templateUrl: './create-benh-an.component.html',
  styleUrls: ['./create-benh-an.component.css']
})
export class CreateBenhAnComponent implements OnInit {
  benhAnForm: FormGroup = new FormGroup({
    maBenhAn: new FormControl(),
    ngayVao: new FormControl(),
    ngayRa: new FormControl(),
    liDo: new FormControl(),
    phuongPhap: new FormControl(),
    bacSi: new FormControl(),
    benhNhans: new FormControl(),

  })
  benhNhanList: BenhNhan[] = [];

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBenhNhan();
    this.benhAnForm = new FormGroup({
      maBenhAn: new FormControl(''),
      ngayVao: new FormControl(''),
      ngayRa: new FormControl(''),
      liDo: new FormControl(''),
      phuongPhap: new FormControl(''),
      bacSi: new FormControl(''),
      benhNhans: new FormControl('')
    })
  }

  private getAllBenhNhan() {
    this.benhNhanService.getListBenhNhan().subscribe(next => {
      this.benhNhanList = next;
    })
  }
  createBenhAn() {
    const benhAn = this.benhAnForm.value;
    // benhAn.id = 0;
    this.benhAnService.CreateBenhAn(benhAn).subscribe(next => {
      alert('thêm mới thành công');
      this.router.navigateByUrl('');
    },error => {
      alert('lỗi');
    })
  }
}
