import {Injectable} from '@angular/core';
import {CustomerType} from "../../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = []

  constructor() {
    this.customerTypeList.push({
        id: 1, name: "Member"
      }, {
      id: 2, name: "Vip"})
  }
}
