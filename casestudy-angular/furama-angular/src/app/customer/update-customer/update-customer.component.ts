import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerService} from "../service/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: CustomerType[]=[];
  customer: Customer;
  constructor( private router : Router,
               private customerTypeService: CustomerTypeService,
               private customerService: CustomerService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.customerTypeList;
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      birthday: new FormControl('',Validators.required),
      gender: new FormControl(true),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{9}$')]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^090[0-9]{7}$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      address: new FormControl('',Validators.required),
      customerType: new FormControl(),
    })
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.customer = this.customerService.getById(id);
      console.log(this.customer);
      this.customerForm.patchValue(this.customer);
      this.customerForm.patchValue({customerType: this.customer.customerType.id})
    })
  }


  updateCustomer() {
    const customer = this.customerForm.value;
    this.customerService.update(customer);
    this.router.navigateByUrl('customer/list-customer');
  }
}
