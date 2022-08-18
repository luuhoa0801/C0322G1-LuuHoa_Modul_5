import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";
import {CustomerService} from "../../customer/service/customer.service";
import {FacilityService} from "../../facility/service/facility.service";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
    this.contractList.push({
        stt: 1, startDate: "11-01-2022", endDate: "12-01-2022", deposits: 1000,
        customer: customerService.customerList[0],
        facility: facilityService.facilityList[0]
      },
      {
        stt: 2, startDate: "13-04-2022", endDate: "15-04-2022", deposits: 2000,
        customer: customerService.customerList[1],
        facility: facilityService.facilityList[1]
      },
      {
        stt: 3, startDate: "11-06-2022", endDate: "12-07-2022", deposits: 3000,
        customer: customerService.customerList[2],
        facility: facilityService.facilityList[2]
      }
    );
  }

  getAllContract() {
    return this.contractList;
  }

  saveContract(contract){
    // contract.stt = this.contractList.length + 1;
    // if (contract.customer==1){
    //   contract.customer = this.customerService.customerList[0];
    // }else if (contract.customer==2){
    //   contract.customer = this.customerService.customerList[1];
    // }else if (contract.customer==3){
    //   contract.customer = this.customerService.customerList[2];
    // }
    // if (contract.facility==1){
    //
    // }
  }

}
