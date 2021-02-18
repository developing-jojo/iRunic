import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Stepcounter} from "@ionic-native/stepcounter/ngx";


@Component({
  selector: 'stepcounter',
  templateUrl: 'stepcounter.html'
})
export class StepcounterComponent implements OnInit, OnDestroy {

  @Input() steps: number;

  success : any;
  failure : any;

  constructor(private stepcounter: Stepcounter) {
  }

  startStepcount() {
    this.stepcounter.start(0).then(onSuccess => alert('Start Success ' + onSuccess), onFailure => alert('Start Fail ' + onFailure));
    //this.stepcounter.getStepCount();
  }

  stopStepcount(){
    this.stepcounter.stop().then(onSuccess => alert('Stop Success ' + onSuccess), onFailure => alert('Stop Fail ' + onFailure));
  }

  getStepcount(){
    this.stepcounter.getStepCount().then(onSuccess => alert('Get Success ' + onSuccess), onFailure => alert('Get Fail ' + onFailure));
  }

  canCount(){
    this.stepcounter.deviceCanCountSteps().then(onSuccess => alert('Can Count ' + onSuccess), onFailure => alert('Cant Count ' + onFailure));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
