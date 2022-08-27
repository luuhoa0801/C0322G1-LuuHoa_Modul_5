import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenAnRoutingModule } from './benAn-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListBenhAnComponent} from "./list-benhAn/list-benh-an.component";
import { UpdateBenhAnComponent } from './update-benh-an/update-benh-an.component';
import { CreateBenhAnComponent } from './create-benh-an/create-benh-an.component';


@NgModule({
  declarations: [
    ListBenhAnComponent,
    UpdateBenhAnComponent,
    CreateBenhAnComponent
  ],
  imports: [
    CommonModule,
    BenAnRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BenAnModule { }
