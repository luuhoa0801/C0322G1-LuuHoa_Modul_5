import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  p:number = 1;
  // @ts-ignore
  collection: any[] = this.customerList;

  customerList: Customer[] = [];
  id :number ;
  name :string ;
  searchName: string;

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

  search() {
    if (this.searchName === ''){
      alert('khong co gi de tim');
      this.ngOnInit();
    }else {
      console.log(this.searchName);
      this.customerService.searchCustomer(this.searchName).subscribe(next =>{
        if (next.length ===  0){
          alert('khong tim thay');
        }
        this.customerList = next;
      });
    }
  }
}
