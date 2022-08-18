import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor() {
    this.facilityList.push({
        name: "OCEAN SUITE",
        area: 10,
        cost: 1000,
        maxPeople: 2,
        rentType: "ngày",
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 50,
        numberOfFloors: 2,
        facilityFree: "không",
        url: "\\assets\\img\\fu1.jpg"
      },
      {
        name: "OCEAN STUDIO SUITE",
        area: 80,
        cost: 2000,
        maxPeople: 3,
        rentType: "tuần",
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: "không",
        url: "\\assets\\img\\fu2.jpg"
      },
      {
        name: "OCEAN DELUXE",
        area: 30,
        cost: 3000,
        maxPeople: 5,
        rentType: "năm",
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 40,
        numberOfFloors: 4,
        facilityFree: "không",
        url: "\\assets\\img\\fu3.jpg"
      })
  }

  getAllFacility() {
    return this.facilityList;
  }

}

