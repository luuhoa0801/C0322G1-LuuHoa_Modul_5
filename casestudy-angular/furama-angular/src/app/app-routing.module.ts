import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'customer',loadChildren: ()=> import('./customer/customer.module').then(module => module.CustomerModule)},
  {path:'facility',loadChildren: ()=> import('./facility/facility.module').then(module => module.FacilityModule)},
  {path:'contract',loadChildren: ()=> import('./contract/contract.module').then(module => module.ContractModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
