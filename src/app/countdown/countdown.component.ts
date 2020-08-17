import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

/*
  KNOWN BUGS
  -USER CAN DELETE THE NUMBER FROM INPUT -> script takes a NaN value which leads to the program breaking
*/

  title: string = "Countdown";
//target date
  targetDate: Date = new Date();
  hour: number = this.targetDate.getHours();
  minute: number = this.targetDate.getMinutes();
  second: number = this.targetDate.getSeconds();
//current date
  currentDate: Date;
//different variables
  timeDifferenceString: string;
  differenceInMilliseconds: number; //gets the time difference in milliseconds -> is being used to get the ammount of hours, minutes etc. to display
  difference: number; //every time the calculateDifference is called, this var gets assigned the value of differenceInMilliseconds. 
                    //used for checking if the target date has been reached. added it because the other var gets its value changed to assign values for hours, minutes and seconds.
  timeSet: boolean;
  iv;

  constructor() { }

  ngOnInit(){
    this.timeSet = false;
  }
  
  calculateDifference(){
    let days: number, hours: number, minutes: number, seconds: number;
    this.differenceInMilliseconds = this.targetDate.getTime() - (new Date()).getTime();
    this.difference = this.differenceInMilliseconds;
    if(this.difference <= 900){
      clearInterval(this.iv);
      // console.log("=== interval cleared ===")
      this.timeSet = false;
    }else{
    //difference in days
      days = Math.floor(this.differenceInMilliseconds / 86400000);
      this.differenceInMilliseconds = this.differenceInMilliseconds - (days * 86400000);
    //difference in hours
      hours = Math.floor(this.differenceInMilliseconds / 3600000);
      this.differenceInMilliseconds = this.differenceInMilliseconds - (hours * 3600000);
    //difference in minutes
      minutes = Math.floor(this.differenceInMilliseconds / 60000);
      this.differenceInMilliseconds = this.differenceInMilliseconds - (minutes * 60000);
    //difference in seconds
      seconds = Math.floor(this.differenceInMilliseconds / 1000);
      this.timeDifferenceString = ` ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  }

  sumbitDate(){
    this.currentDate = new Date();
    this.targetDate.setHours(this.hour, this.minute, this.second); //changes the time of a target date
    this.calculateDifference();
    if(!this.timeSet){
      this.timeSet = true;
      this.iv = setInterval(() => {
        this.calculateDifference(); 
        }, 1000);
    }
  }

  logging(){
    console.log(this.differenceInMilliseconds);
    this.hour++;
    this.sumbitDate();
  }

  deny(){
    event.preventDefault();
  }

  checkNum(num: number): boolean{
    let isNumber: boolean = isNaN(num);
    return isNumber;
  }

  checkValue(num: number, part: string){
    if(part === 'hour'){
      if(num > 23){this.hour = 23;} //if number is higher than the max limit
      else if(num < 0){this.hour = 0;} //if number is lower than the min limit
      else{this.hour = num;} //if number is within the limits
    }else if(part === 'minute'){
      if(num > 59){this.minute = 59;}
      else if(num < 0){this.minute = 0;}
      else{this.minute = num;}
    }else if(part === 'second'){
      if(num > 59){this.second = 59;}
      else if(num < 0){this.second = 0;}
      else{this.second = num;}
    }
  }
}
