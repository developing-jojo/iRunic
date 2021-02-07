import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pedometer } from "@ionic-native/pedometer/ngx";
import { Subscription } from "rxjs";

@Component({
  selector: 'stepcounter',
  templateUrl: 'stepcounter.html'
})
export class StepcounterComponent implements OnInit, OnDestroy {

  @Input() steps: number;

  sub: Subscription;

  constructor(private pedometer: Pedometer) {
  }

  startStepcount() {
    this.sub = this.pedometer.startPedometerUpdates()
        .subscribe(value => {
          this.steps = value.distance
            }
        );

    console.log("subscribed")
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
