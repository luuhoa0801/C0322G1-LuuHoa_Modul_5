import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";


@NgModule({
  declarations: [
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModule { }
