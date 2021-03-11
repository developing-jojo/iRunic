import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Health } from "@ionic-native/health/ngx";

@Component({
  selector: 'stepcounter',
  templateUrl: 'stepcounter.html'
})
export class StepcounterComponent implements OnInit, OnDestroy {

  @Input() steps: number;

  sub: Subscription;

  constructor(private health: Health) {
  }

  ngOnInit(): void {
    this.health.isAvailable().then(r => {
      console.log(r);
    }, reason => {
      console.log(reason)
    });

  }

  ngOnDestroy(): void {
  }
}
