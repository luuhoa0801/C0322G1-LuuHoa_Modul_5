import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{9}$')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^090[0-9]{7}$')]),
    email: new FormControl('',[Validators.required,Validators.pattern('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    address: new FormControl('',Validators.required),
  })

  get name() {
    return this.customerForm.get('name')
  }
  get idCard() {
    return this.customerForm.get('idCard')
  }
  get phone(){
    return this.customerForm.get('phone')
  }
  get email(){
    return this.customerForm.get('email')
  }
  get address(){
    return this.customerForm.get('address')
  }
}
