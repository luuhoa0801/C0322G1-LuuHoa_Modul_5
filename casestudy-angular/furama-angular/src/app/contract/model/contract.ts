import {Customer} from "../../customer/model/customer";
import {Facility} from "../../facility/model/facility";

export interface Contract {
  stt?: number;
  startDate?: string;
  endDate?: string;
  deposits?: number;
  customer?: Customer;
  facility?: Facility;

}
