import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {UpdateFacilityComponent} from "./update-facility/update-facility.component";
import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateFacilityComponent,
    UpdateFacilityComponent,
    ListFacilityComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FacilityModule { }
