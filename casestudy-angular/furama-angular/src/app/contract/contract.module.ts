import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {ListContractComponent} from "./list-contract/list-contract.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateContractComponent,
    ListContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContractModule { }
