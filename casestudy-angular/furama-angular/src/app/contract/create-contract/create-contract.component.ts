import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;
import {Router} from "@angular/router";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup;

  constructor(private router:Router,
              private contractService: ContractService) { }

  ngOnInit(): void {
    // this.contractForm = new FormGroup({
    //   stt: new FormControl(),
    //   startDate: new FormControl(),
    //   endDate: new FormControl(),
    //   deposits: new FormControl(),
    //   customer: new FormControl(),
    //   facility: new FormControl(),
    // })
  }

  createContract() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.router.navigateByUrl('/contract');
  }
}
