import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {RentTypeService} from "./rent-type.service";
import {FacilityTypeService} from "./facility-type.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URLFacility =`${environment.apiUrlFacility}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor(private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private httpClient: HttpClient) {

  }

  getListFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(API_URLFacility)
  }

  CreateFacility(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(API_URLFacility, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(API_URLFacility + '/' + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(API_URLFacility + '/' + id , facility);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URLFacility + '/' + id);
  }
}

