import {Country} from './country';

export interface Register {
  email?: string;
  password?: number;
  confirmPassword?: number;
  country?: Country;
  age?: number ;
  gender?: number;
  phone?: number;
}
