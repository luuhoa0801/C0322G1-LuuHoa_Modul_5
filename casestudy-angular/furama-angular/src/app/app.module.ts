import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';


import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { UpdateFacilityComponent } from './facility/update-facility/update-facility.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'customer', component: ListCustomerComponent},
  { path: 'facility', component: ListFacilityComponent},
  { path: 'contract', component: ListContractComponent},
  { path: 'update-customer/:id', component: UpdateCustomerComponent},
  { path: 'create-customer', component: CreateCustomerComponent},
  { path: 'create-contract', component: CreateContractComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    ListFacilityComponent,
    ListContractComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent,
    CreateContractComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
