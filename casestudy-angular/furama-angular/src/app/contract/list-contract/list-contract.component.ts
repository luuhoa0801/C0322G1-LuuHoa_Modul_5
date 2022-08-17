import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contract : Contract[] =[];

  constructor() {
    this.contract.push({stt:1,startDate:"11-01-2022",endDate:"12-01-2022",deposits:1000,
      customer:"Văn Thị Bê",facility:"Villa"});
    this.contract.push({stt:2,startDate:"13-04-2022",endDate:"15-04-2022",deposits:2000,
      customer:"Đinh Văn Tiền",facility:"House"});
    this.contract.push({stt:3,startDate:"11-06-2022",endDate:"12-07-2022",deposits:3000,
      customer:"Nguyễn Văn C",facility:"Room"});
  }

  ngOnInit(): void {
  }

}
