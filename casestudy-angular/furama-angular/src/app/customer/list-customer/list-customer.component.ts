import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList: Customer[] = [];
  id :number ;
  name :string ;

  constructor(private customerService: CustomerService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getListCustomer().subscribe(value => {
      if (value !== undefined){
        this.customerList = value;
        console.log(value)
      }
    },error => {
      alert("lOI")
    })
  }

  valueDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id) {
    this.customerService.deleteCustomer(id).subscribe(next =>{
     this.getAll();
     this.router.navigateByUrl('customer/list-customer')
    })
  }
}
