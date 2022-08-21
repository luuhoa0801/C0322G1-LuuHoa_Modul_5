import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;
import {Router} from "@angular/router";
import {ContractService} from "../service/contract.service";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../customer/service/customer.service";
import {Facility} from "../../facility/model/facility";
import {FacilityService} from "../../facility/service/facility.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  constructor(private router: Router,
              private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilityList = this.facilityService.facilityList;
    this.customerList = this.customerService.customerList;
    this.contractForm = new FormGroup({
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      deposits: new FormControl('',[Validators.required,Validators.min(0)]),
      customer: new FormControl('',[Validators.required]),
      facility: new FormControl('',[Validators.required]),
    })
  }

  createContract() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    console.log(this.facilityList);
    this.router.navigateByUrl('/list-contract');
  }
}
