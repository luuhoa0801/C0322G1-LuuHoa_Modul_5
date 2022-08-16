import { Component, OnInit } from '@angular/core';
  import {Customer} from "../model/customer";
  import {CustomerType} from "../model/customerType";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  // customerTypeList: CustomerType[]=[{id:1,name:"Gold"},{id:2,name:"Member"},{id:3,name:"Vip"}];

  customer: Customer[] =[];

  constructor() {
    this.customer.push({id:1,name:"Hòa",birthday:"01-01-1990",gender:true,idCard:"123456789",
      phone:12345,email:"hoa@gmail.com",address:"QN",customerType:{id:1,name:"Gold"}});
    this.customer.push({id:2,name:"Ly",birthday:"02-02-1999",gender:false,idCard:"222222",
      phone:789123,email:"ly@gmail.com",address:"Da Nang",customerType: {id:2,name:"Member"}});
    this.customer.push({id:3,name:"Duc",birthday:"03-03-1995",gender:true,idCard:"333333",
      phone:132342,email:"duc@gmail.com",address:"HN",customerType:{id:3,name:"Vip"}});
  }

  ngOnInit(): void {
  }

}
