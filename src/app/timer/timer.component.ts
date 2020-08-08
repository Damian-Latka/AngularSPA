import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  title: string = "Timer App";
  iv: any;
  timeSet: boolean = false;

  display: HTMLElement;
  hoursInput: HTMLInputElement;
  minutesInput: HTMLInputElement;
  secondsInput: HTMLInputElement;

  hours: number = 4;
  minutes: number = 2;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.hoursInput = <HTMLInputElement>document.getElementById("hoursInput");
    this.minutesInput = <HTMLInputElement>document.getElementById("minutesInput");
    this.secondsInput = <HTMLInputElement>document.getElementById("secondsInput");
  }

  public setTime(){
    console.log("set time");
    this.timeSet = true;

    this.hours = this.hoursInput.valueAsNumber;
    this.minutes = this.minutesInput.valueAsNumber;
    this.seconds = this.secondsInput.valueAsNumber;

    this.iv = setInterval(() => {
      this.displayTime(); 
      }, 1000);
  }

  public displayTime(){
    //check if there is any time left
    if(this.hours === 0 && this.minutes === 0 && this.seconds === 0){
      clearInterval(this.iv);
      alert('TIMER FINISHED');
      this.resetTime();
    }
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

  public changeTime(ammount: number, segment: string){
    console.log(ammount + ' ' + segment);
    if(segment === "hours"){
      this.hoursInput.valueAsNumber += ammount;
      if(this.hoursInput.valueAsNumber < 0){
        this.hoursInput.valueAsNumber++;
      }
    }
    else if(segment === "minutes"){
      this.minutesInput.valueAsNumber += ammount;
      if(this.minutesInput.valueAsNumber < 0){
        this.minutesInput.valueAsNumber++;
      }
    }
    else if(segment === "seconds"){
      this.secondsInput.valueAsNumber += ammount;
      if(this.secondsInput.valueAsNumber < 0){
        this.secondsInput.valueAsNumber++;
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
  }
}
