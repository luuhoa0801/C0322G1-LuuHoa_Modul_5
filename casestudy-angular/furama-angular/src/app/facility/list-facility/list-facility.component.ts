import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility";
import {CustomerService} from "../../customer/service/customer.service";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilityList: Facility[]=[];

  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilityList = this.facilityService.getAllFacility();
    // console.log(this.facilityList)
  }

}
