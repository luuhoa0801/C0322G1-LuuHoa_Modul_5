import {Injectable} from '@angular/core';
import {Register} from 'ts-node';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {
  }

  listRegister: Register[] = [{
    // @ts-ignore
    email: 'abc',
    password: 123456,
    confirmPassword: 123456,
    country: 'DN',
    age: 19,
    gender: 1,
    phone: +8401234567
  }];

}
