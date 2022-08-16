import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  number1 = 0;

  number2 = 0;

  result = 0;

  err = '';

  ngOnInit(): void {
  }

  calculator(item) {
    if (item === '+') {
      this.result = this.number1 + this.number2;
    } else if (item === '-') {
      this.result = this.number1 - this.number2;
    } else if (item === '*') {
      this.result = this.number1 * this.number2;
    } else {
      if (this.number2 === 0) {
        this.err = 'Khong the chia cho 0';
      } else {
        this.result = this.number1 / this.number2;
      }
    }
  }

}
