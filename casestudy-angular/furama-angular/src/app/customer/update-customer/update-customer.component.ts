import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customerType";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerService} from "../service/customer.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm : FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    birthday: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required,Validators.pattern('^[1-9]{9}$')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^090[0-9]{7}$')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required]),
    customerType: new FormControl(''),

  })
  customerTypeList: CustomerType[] = [];
  id: number;

  constructor(private router: Router,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    })
  }
  ngOnInit(): void {
  }

  private getCustomer(id: number) {
    this.customerService.findById(id).subscribe(customer => {
      this.customerForm.patchValue(customer);
      console.log(customer);
      this.customerTypeService.getListCustomerType().subscribe(next => {
        this.customerTypeList = next;
        for (const item of next) {
          if (item.id === customer.customerType.id) {
            this.customerForm.patchValue({customerType: item});
          }
        }
      })
    })
  }

  updateCustomer() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(this.customerForm.value.id, customer).subscribe(() =>{
      this.customerForm.reset();
      alert('Chỉnh sửa thành công');
      this.router.navigateByUrl('customer/list-customer');
    })

  }


}
