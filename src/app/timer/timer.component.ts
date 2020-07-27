import { Component, OnInit, Input } from '@angular/core';
import { TimeInterval } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  title: string = "Minutnik";
  iv: any;
  timeSet: boolean = false;

  submitBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  display: HTMLElement;
  hoursInput: HTMLInputElement;
  minutesInput: HTMLInputElement;
  secondsInput: HTMLInputElement;

  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
  }

  public setTime(){
    console.log("set time");
    this.timeSet = true;

    this.hoursInput = <HTMLInputElement>document.getElementById("hoursInput");
    this.minutesInput = <HTMLInputElement>document.getElementById("minutesInput");
    this.secondsInput = <HTMLInputElement>document.getElementById("secondsInput");
    this.hours = this.hoursInput.valueAsNumber;
    this.minutes = this.minutesInput.valueAsNumber;
    this.seconds = this.secondsInput.valueAsNumber;

    this.submitBtn = <HTMLButtonElement>document.getElementById("submitBtn");
    this.resetBtn = <HTMLButtonElement>document.getElementById("resetBtn");

    this.submitBtn.setAttribute("disabled", "");
    this.hoursInput.setAttribute("disabled", "");
    this.minutesInput.setAttribute("disabled", "");
    this.secondsInput.setAttribute("disabled", "");
    this.resetBtn.removeAttribute("disabled");

    this.iv = setInterval(() => {
      this.displayTime(); 
      }, 1000);
  }

  public displayTime(){
    if(this.hours === 0 && this.minutes === 0 && this.seconds === 0){
      clearInterval(this.iv);
      alert('TIMER FINISHED');
    }
    else
    {
      this.seconds--;
      if(this.seconds < 0){
        this.minutes--;
        this.seconds = 59;
      }
      if(this.minutes < 0){
        this.hours--;
        this.minutes = 59;
      }
    }
  }

  public resetTime(){
    console.log('reset');
    this.timeSet = false;
    clearInterval(this.iv);
    this.hoursInput.valueAsNumber = 0;
    this.minutesInput.valueAsNumber = 0;
    this.secondsInput.valueAsNumber = 0;

    this.submitBtn.removeAttribute("disabled");
    this.hoursInput.removeAttribute("disabled");
    this.minutesInput.removeAttribute("disabled");
    this.secondsInput.removeAttribute("disabled");
    this.resetBtn.setAttribute("disabled", "");
  }
}
