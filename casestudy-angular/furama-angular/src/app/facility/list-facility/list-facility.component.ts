import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {CustomerService} from "../../customer/service/customer.service";
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilityList: Facility[] = [];
  id : number;
  name : string;

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  private getAll() {
    this.facilityService.getListFacility().subscribe(value => {
      if (value!== undefined){
        this.facilityList = value;
      }
    },error => {
      alert('Lỗi rồi')
    })
  }
  valueDelete(id: number, name: string){
    this.id = id;
    this.name = name;
  }
  delete(id){
    this.facilityService.deleteFacility(id).subscribe(value => {
      this.getAll();
      this.router.navigateByUrl('facility/list-facility')
    })
  }
}
