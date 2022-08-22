import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../model/facilityType";
import {RentType} from "../model/rentType";
import {Facility} from "../model/facility";
import {FacilityTypeService} from "../service/facility-type.service";
import {RentTypeService} from "../service/rent-type.service";
import {FacilityService} from "../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  facilityTypeList: FacilityType[]=[];
  rentTypeList: RentType[]=[];
  facility: Facility;
  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.facilityTypeList = this.facilityTypeService.facilityTypeList;
    this.rentTypeList = this.rentTypeService.rentTypeList;
    this.facilityForm = new FormGroup({
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
    })
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap )=>{
      const id = +paramMap.get('id');
      this.facility = this.facilityService.getById(id);
      this.facilityForm.patchValue(this.facility);
      this.facilityForm.patchValue({facilityType: this.facility.facilityType.id});
      this.facilityForm.patchValue({rentType: this.facility.rentType.id});
    })

  }

  updateFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.update(facility);
    this.router.navigateByUrl('facility/list-facility')
  }
}
