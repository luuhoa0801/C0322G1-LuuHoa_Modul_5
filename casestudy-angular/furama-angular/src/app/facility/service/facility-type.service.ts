import {Injectable} from '@angular/core';
import {FacilityType} from "../model/facilityType";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) {
  };

  getListFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(' http://localhost:3000/facilityType');
  }

  findById(id: number):Observable<FacilityType> {
    return this.httpClient.get<FacilityType>('http://localhost:3000/facilityType/' + id);
  }

}

