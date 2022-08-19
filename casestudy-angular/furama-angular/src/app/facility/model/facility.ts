import {RentType} from "./rentType";
import {FacilityType} from "./facilityType";

export interface Facility {
  id?:number;
  name?:string;
  area?: number;
  cost?: number;
  maxPeople?:number;
  standardRoom?: string;
  descriptionOtherConvenience?:string;
  poolArea?:number;
  numberOfFloors?:number;
  facilityFree?:string;
  url?:string;
  rentType?:RentType;
  facilityType?: FacilityType
}

