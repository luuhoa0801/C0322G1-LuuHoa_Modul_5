import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "./customer-type.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
const API_URLCustomer =`${environment.apiUrlCustomer}`;
const API_URLContract =`${environment.apiUrlContract}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = []

  constructor(private customerTypeService: CustomerTypeService,
              private httpClient: HttpClient) {
  }

  // @ts-ignore
  getListCustomer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(API_URLCustomer);
  }

  CreateCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URLCustomer, customer);
  }
  findById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URLCustomer + '/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(API_URLCustomer + '/' + id , customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(API_URLCustomer + '/' + id);
  }
  searchCustomer(value: string):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(API_URLCustomer +'/?name_like='+value );
  }

}
