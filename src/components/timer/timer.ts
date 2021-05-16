import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.html'
})
export class TimerComponent implements OnInit, OnDestroy{

  public arrows: boolean;
  public timer: boolean;
  public isntStarted: boolean;
  public color: string;

  constructor() {
  }

  ngOnInit(): void {
    this.color = '#0C6E9B';
    this.arrows = false;
    this.timer = false;
    this.isntStarted = true;
    }

  public timeBegan = null;
  public timeStopped:any = null;
  public stoppedDuration:any = 0;
  public started = null;
  public running = false;
  public blankTime = "00:00.000";
  public time = "00:00.000";

  public runStartStop() {
    this.arrows = !this.arrows;
    this.timer = !this.timer;

    if (this.isntStarted === true) {
      this.color = '#649C0C';
      this.start();
    } else {
      this.stop();
      this.reset();
      this.color = '#0C6E9B';
    }

    this.isntStarted = !this.isntStarted;
  }

  start() {
    if(this.running) return;
    if (this.timeBegan === null) {
      this.reset();
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      let newStoppedDuration:any = (+new Date() - this.timeStopped);
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), 10);
    this.running = true;
  }
  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
  }
  reset() {
    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
  }
  zeroPrefix(num, digit) {
    let zero = '';
    for(let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
  clockRunning(){
    let currentTime:any = new Date();
    let timeElapsed:any = new Date(currentTime - this.timeBegan - this.stoppedDuration);
    let min = timeElapsed.getUTCMinutes();
    let sec = timeElapsed.getUTCSeconds();
    let ms = timeElapsed.getUTCMilliseconds();
    this.time =
      this.zeroPrefix(min, 2) + ":" +
      this.zeroPrefix(sec, 2) + "." +
      this.zeroPrefix(ms, 3);
  };

  ngOnDestroy(): void {
    this.stop();
    this.reset();
  }

}
