import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customerType";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../service/customer-type.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl(),
  });
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllListCustomerType();
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      birthday: new FormControl(),
      gender: new FormControl(true),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{9}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^090[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      address: new FormControl('', Validators.required),
      customerType: new FormControl(),
    })
  }

  getAllListCustomerType() {
    this.customerTypeService.getListCustomerType().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  createCustomer() {
    const customer = this.customerForm.value;
    this.customerService.CreateCustomer(customer).subscribe(next => {
      alert('thêm mới thành công');
      this.customerForm.reset();
      this.router.navigateByUrl('customer/list-customer');
    },error => {
      alert('lỗi');
    })
  }
}
