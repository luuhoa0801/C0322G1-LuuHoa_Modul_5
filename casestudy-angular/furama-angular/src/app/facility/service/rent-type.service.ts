import {Injectable} from '@angular/core';
import {RentType} from "../model/rentType";
import {Observable} from "rxjs";
import {CustomerType} from "../../customer/model/customerType";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {


  constructor(private httpClient: HttpClient) {
  }

  getListRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>('http://localhost:3000/rentType');
  }

  findById(id: number): Observable<RentType> {
    return this.httpClient.get<RentType>('http://localhost:3000/rentType/' + id)
  }
}

