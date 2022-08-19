import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {RentTypeService} from "./rent-type.service";
import {FacilityTypeService} from "./facility-type.service";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor(private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService) {
    this.facilityList.push({
        id:1,
        name: "OCEAN SUITE",
        area: 10,
        cost: 1000,
        maxPeople: 2,
        rentType:rentTypeService.rentTypeList[0] ,
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 50,
        numberOfFloors: 2,
        facilityFree: "không",
        facilityType:facilityTypeService.facilityTypeList[0],
        url: "\\assets\\img\\fu1.jpg"
      },
      {
        id:2,
        name: "OCEAN STUDIO SUITE",
        area: 80,
        cost: 2000,
        maxPeople: 3,
        rentType: rentTypeService.rentTypeList[1],
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: "không",
        facilityType:facilityTypeService.facilityTypeList[1],
        url: "\\assets\\img\\fu2.jpg"
      },
      {
        id:3,
        name: "OCEAN DELUXE",
        area: 30,
        cost: 3000,
        maxPeople: 5,
        rentType: rentTypeService.rentTypeList[2],
        standardRoom: "vip",
        descriptionOtherConvenience: "không",
        poolArea: 40,
        numberOfFloors: 4,
        facilityFree: "không",
        facilityType:facilityTypeService.facilityTypeList[2],
        url: "\\assets\\img\\fu3.jpg"
      })
  }

  getAllFacility() {
    return this.facilityList;
    console.log(this.facilityList)
  }
  saveFacility(facility){
    facility.id = this.facilityList.length + 1;
    if (facility.facilityType==1){
      facility.facilityType =this.facilityTypeService.facilityTypeList[0];
    }else if (facility.facilityType==2){
      facility.facilityType =this.facilityTypeService.facilityTypeList[1];
    }else if (facility.facilityType==3){
      facility.facilityType =this.facilityTypeService.facilityTypeList[2];
    }
    if (facility.rentType==1){
      facility.rentType=this.rentTypeService.rentTypeList[0];
    }else if (facility.rentType==2){
      facility.rentType=this.rentTypeService.rentTypeList[1];
    }else if (facility.rentType==3){
      facility.rentType=this.rentTypeService.rentTypeList[2];
    }
    console.log(this.facilityTypeService.facilityTypeList)
    this.facilityList.push(facility);
  }

  delete(id: number) {
    this.facilityList = this .facilityList.filter(facility => {
      return facility.id !== id;
    });
  }
}

