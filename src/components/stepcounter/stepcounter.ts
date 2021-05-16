import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Health } from "@ionic-native/health/ngx";

@Component({
  selector: 'stepcounter',
  templateUrl: 'stepcounter.html'
})
export class StepcounterComponent implements OnInit, OnDestroy {

  @Input() steps: any;

  sub: Subscription;

  constructor(private health: Health) {
  }

  ngOnInit(): void {
    this.health.isAvailable().then(r => {
      this.steps = r.valueOf();
    }, reason => {
      this.steps = reason.valueOf();
    });

  }

  ngOnDestroy(): void {
  }
}
