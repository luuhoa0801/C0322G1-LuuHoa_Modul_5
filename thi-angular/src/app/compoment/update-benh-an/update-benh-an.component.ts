import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhNhan} from "../model/benhNhan";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BenhAnService} from "../service/benhAn.service";
import {BenhNhanService} from "../service/benhNhan.service";

@Component({
  selector: 'app-update-benh-an',
  templateUrl: './update-benh-an.component.html',
  styleUrls: ['./update-benh-an.component.css']
})
export class UpdateBenhAnComponent implements OnInit {
  benhAnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    maBenhAn: new FormControl(),
    ngayVao: new FormControl('', [Validators.required]),
    ngayRa: new FormControl('', [Validators.required]),
    liDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required]),
    bacSi: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    benhNhans: new FormControl(''),
  })
  benhNhanList: BenhNhan[] = [];
  id: number;

  constructor(private router: Router,
              private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBenhAn(this.id);
    })
  }

  ngOnInit(): void {
  }

  private getBenhAn(id: number) {
    this.benhAnService.findById(id).subscribe(benhAn => {
      console.log(benhAn);
      this.benhAnForm.patchValue(benhAn);
      console.log(this.benhAnForm);
      this.benhNhanService.getListBenhNhan().subscribe(next => {
        this.benhNhanList = next;
        console.log(next)
        for (const item of next) {
          if (item.id === this.benhAnForm.value.benhNhans.id) {
            this.benhAnForm.patchValue({benhNhans: item});
          }
        }

      })
    })
  }

  updateBenhAn() {
    const benhAn = this.benhAnForm.value;
    this.benhAnService.updateBenhAn(this.benhAnForm.value.id, benhAn).subscribe(() => {
      this.benhAnForm.reset();
      alert('Chỉnh sửa thành công');
      this.router.navigateByUrl('');
    })

  }

}
