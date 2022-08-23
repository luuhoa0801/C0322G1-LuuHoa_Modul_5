import {Injectable} from '@angular/core';
import {CustomerType} from "../model/customerType";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }
  getListCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerType');
  }

}
