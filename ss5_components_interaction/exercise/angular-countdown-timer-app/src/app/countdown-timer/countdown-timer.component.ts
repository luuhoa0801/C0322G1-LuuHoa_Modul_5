import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  @Input()  value: number = 11;
 public setTime;
  constructor() { }

  ngOnInit(): void {
  }
  reset() :number {
  this.stop();
  return this.value = 11;
  }
  start(){
    this.setTime = setInterval(() => {
      this.value = +this.value - 1;
      if (this.value === 0) {
        clearInterval(this.setTime);
      }
    }, 1000);
  }
  stop(){
    clearInterval(this.setTime);
  }
}
