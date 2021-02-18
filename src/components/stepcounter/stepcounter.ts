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
    this.stepcounter.start(0).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
    //this.stepcounter.getStepCount();
  }

  stopStepcount(){
    this.stepcounter.stop().then(onSuccess => alert('Stop Success ' + onSuccess), onFailure => alert('Stop Fail ' + onFailure));
  }

  getStepcount(){
    this.stepcounter.getStepCount().then(onSuccess => console.log('success ', onSuccess), onFailure => console.log('error ', onFailure));
  }

  canCount(){
    this.stepcounter.deviceCanCountSteps().then(onSuccess => alert('Can Count ' + onSuccess), onFailure => alert('Cant Count ' + onFailure));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
