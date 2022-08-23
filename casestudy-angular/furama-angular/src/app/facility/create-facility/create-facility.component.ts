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
  facilityTypelist: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  temp : number = 1;
  public facilityForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router,
              private toast:ToastrService) {
  }

  ngOnInit(): void {
    this.facilityTypelist = this.facilityTypeService.facilityTypeList;
    this.rentTypeList = this.rentTypeService.rentTypeList;
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      area: new FormControl('', [Validators.required, Validators.min(1)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      standardRoom: new FormControl('0', [Validators.required]),
      descriptionOtherConvenience: new FormControl('0', [Validators.required]),
      poolArea: new FormControl('0', [Validators.required, Validators.min(1)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
      facilityFree: new FormControl('', [Validators.required]),
      url: new FormControl('0', [Validators.required]),
      rentType: new FormControl('1'),
      facilityType: new FormControl('1'),
    });

  }


  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.toast.success("Thêm mới thành công")
    this.router.navigateByUrl('/facility/list-facility');
    console.log(this.facilityService.facilityList)
  }

  changcility(value: number) {
    this.temp=value;
  }
}
