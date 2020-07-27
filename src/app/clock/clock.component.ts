import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  title: string = "Clock";
  date: Date = new Date();
  hours: string;
  minutes: string;
  seconds: string;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date: Date = new Date();
      this.updateDate(date);
    }, 500);
  }

  updateDate(date: Date){
    this.hours = date.getHours().toString();
      if(+this.hours < 10){
        this.hours = '0' + this.hours;
      }
    this.minutes = date.getMinutes().toString();
    if(+this.minutes < 10){
      this.minutes = '0' + this.minutes;
    }
    this.seconds = date.getSeconds().toString();
    if(+this.seconds < 10){
      this.seconds = '0' + this.seconds;
    }
  }

}
