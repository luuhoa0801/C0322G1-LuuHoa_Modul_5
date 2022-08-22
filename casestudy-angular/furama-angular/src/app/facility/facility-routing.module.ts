import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {UpdateFacilityComponent} from "./update-facility/update-facility.component";


const routes: Routes = [
  {path: 'list-facility', component: ListFacilityComponent},
  {path: 'create-facility', component: CreateFacilityComponent},
  {path: 'update-facility/:id', component: UpdateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
