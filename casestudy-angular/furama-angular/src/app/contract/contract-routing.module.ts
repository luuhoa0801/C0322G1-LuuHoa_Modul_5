import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContractComponent} from "./list-contract/list-contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";


const routes: Routes = [
  {path: 'list-contract', component: ListContractComponent},
  {path: 'create-contract', component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
