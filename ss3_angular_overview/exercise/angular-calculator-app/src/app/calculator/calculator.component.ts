import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  number1: number;

  number2: number;

  result: number;

  err = '';

  ngOnInit(): void {
  }

  addition() {
    this.result = Number(this.number1) + Number(this.number2);
  }

  subtraction() {
    this.result = Number(this.number1) - Number(this.number2);
  }

  multiplication() {
    this.result = Number(this.number1) * Number(this.number2);
  }

  division() {
    if (this.number2 === 0) {
      this.err = 'Số 0 không thể chia được';
    } else {
      this.result = Number(this.number1) / Number(this.number2);
    }
  }
}
