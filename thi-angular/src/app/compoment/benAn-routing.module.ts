import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBenhAnComponent} from "./list-benhAn/list-benh-an.component";
import {UpdateBenhAnComponent} from "./update-benh-an/update-benh-an.component";
import {CreateBenhAnComponent} from "./create-benh-an/create-benh-an.component";

const routes: Routes = [
  {path: '', component:ListBenhAnComponent},
  {path: 'update/:id', component:UpdateBenhAnComponent},
  {path: 'create', component:CreateBenhAnComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenAnRoutingModule { }
