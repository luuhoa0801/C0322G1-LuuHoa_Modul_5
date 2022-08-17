import {Component, Input, Output, EventEmitter, SimpleChange, OnInit} from '@angular/core';
import {IRatingUnit} from './IRatingUnit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  value: number;
  @Input()
  active = true;

  ratingUnits: Array<number> = new Array(10);

  constructor() {
  }

  ngOnInit(): void {
  }
  changValue(numbers: number) {
    this.value = numbers;
    this.active = true;
  }
}
