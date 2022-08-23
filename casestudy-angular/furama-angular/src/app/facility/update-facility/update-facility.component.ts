import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../model/facilityType";
import {RentType} from "../model/rentType";
import {Facility} from "../model/facility";
import {FacilityTypeService} from "../service/facility-type.service";
import {RentTypeService} from "../service/rent-type.service";
import {FacilityService} from "../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    area: new FormControl('',[Validators.required,Validators.min(1)]),
    cost: new FormControl('',[Validators.required,Validators.min(0)]),
    maxPeople: new FormControl('',[Validators.min(1)]),
    standardRoom: new FormControl('0',[Validators.required]),
    descriptionOtherConvenience: new FormControl('0',[Validators.required]),
    poolArea: new FormControl('0',[Validators.required,Validators.min(1)]),
    numberOfFloors: new FormControl('0',[Validators.required,Validators.min(0)]),
    facilityFree: new FormControl('0',[Validators.required]),
    url: new FormControl('0',[Validators.required]),
    rentType: new FormControl(1,[Validators.required]),
    facilityType: new FormControl('',[Validators.required]),
  });
  facilityTypeList: FacilityType[]=[];
  rentTypeList: RentType[]=[];
  id: number;
  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private toast:ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    })
  }
  ngOnInit(): void {
  }

  private getFacility(id: number) {
this.facilityService.findById(id).subscribe(facility =>{
  this.facilityForm.patchValue(facility);
  this.facilityTypeService.getListFacilityType().subscribe(next => {
    this.facilityTypeList = next;
    for (const item of next){
      if (item.id === facility.facilityType.id){
        this.facilityForm.patchValue({facilityType: item});
      }
    }
  });
  this.rentTypeService.getListRentType().subscribe(next => {
    this.rentTypeList = next;
    for (const item of next){
      if (item.id === facility.rentType.id){
        this.facilityForm.patchValue({rentType: item});
      }
    }
  });
})
  }

  updateFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(this.facilityForm.value.id, facility).subscribe(next => {
      this.facilityForm.reset();
      this.toast.success("Chỉnh sửa thành công");
      this.router.navigateByUrl('facility/list-facility')
    });
  }
}
