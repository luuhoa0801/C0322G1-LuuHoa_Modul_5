import {Injectable} from '@angular/core';
import {Country} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  listCountry: Country[] = [
    {id: 1, name: 'VN'},
    {id: 2, name: 'QN'},
    {id: 3, name: 'HN'},
  ];

  constructor() {
  }

  getAll() {
    return this.listCountry;
  }
}
