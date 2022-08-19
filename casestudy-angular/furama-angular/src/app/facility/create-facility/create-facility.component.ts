import { Component, OnInit } from '@angular/core';
import {FacilityType} from "../model/facilityType";
import {RentType} from "../model/rentType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {FacilityTypeService} from "../service/facility-type.service";
import {RentTypeService} from "../service/rent-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityTypelist: FacilityType[]=[];
  rentTypeList: RentType[]=[];
  public facilityForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) { }

  ngOnInit(): void {
this.rentTypeList = this.rentTypeService.rentTypeList;
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      area: new FormControl('',[Validators.required,Validators.min(1)]),
      cost: new FormControl('',[Validators.required,Validators.min(0)]),
      maxPeople: new FormControl('',[Validators.min(1)]),
      standardRoom: new FormControl('',[Validators.required]),
      descriptionOtherConvenience: new FormControl('',[Validators.required]),
      poolArea: new FormControl('',[Validators.required,Validators.min(1)]),
      numberOfFloors: new FormControl('',[Validators.required,Validators.min(0)]),
      facilityFree: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required]),
      rentType: new FormControl(1,[Validators.required]),
      facilityType: new FormControl('',[Validators.required]),
    });

  }


  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.router.navigateByUrl('/facility');
    console.log(this.facilityService.facilityList)
  }
}
