import {Component, OnInit} from '@angular/core';
import {FacilityType} from "../model/facilityType";
import {RentType} from "../model/rentType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {FacilityTypeService} from "../service/facility-type.service";
import {RentTypeService} from "../service/rent-type.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloors: new FormControl(),
    facilityFree: new FormControl(),
    url: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl(),
  });

  facilityTypelist: FacilityType[] = [];
  rentTypeList: RentType[] = [];

  temp:number =1;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router,
              private toast:ToastrService) {
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();

    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      area: new FormControl('', [Validators.required, Validators.min(1)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('0', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
      facilityFree: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      rentType: new FormControl('1'),
      facilityType: new FormControl('1'),
    });

  }

  changcility(value: number) {
    this.temp=value;
  }

  private getAllFacilityType() {
    this.facilityTypeService.getListFacilityType().subscribe(value => {
      this.facilityTypelist = value;
    })
  }

  private getAllRentType() {
    this.rentTypeService.getListRentType().subscribe(value => {
      this.rentTypeList = value;
    })
  }

  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.CreateFacility(facility).subscribe(next => {
      alert('thêm mới thành công');
      this.facilityForm.reset();
      this.router.navigateByUrl('facility/list-facility');
    },error => {
      alert('lỗi');
    })
  }
}
