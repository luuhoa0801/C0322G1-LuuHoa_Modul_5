import {Injectable} from '@angular/core';
import {RentType} from "../model/rentType";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeList: RentType[] = [];

  constructor() {
    this.rentTypeList.push(
      {id: 1, name: 'Year'},
      {id: 1, name: 'Month'},
      {id: 1, name: 'Day'}
    )
  }
}

