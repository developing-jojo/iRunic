import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Subscription } from "rxjs";

@Component({
  selector: 'geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationComponent implements OnInit, OnDestroy {

  @Input() coords: { long: number, lat: number } = {long: 0, lat: 0};

  someValue: any;
  sub: Subscription;

  constructor(private geolocation: Geolocation) {
  }

  getCoordinates() {
    this.sub = this.geolocation.watchPosition()
        .subscribe(position => {

          this.someValue = position.valueOf();

          this.coords.lat = this.someValue.coords.latitude;
          this.coords.long = this.someValue.coords.longitude;
        });

    console.log("subscribed")
  }

  ngOnInit(): void {
    this.geolocation.getCurrentPosition().then(value => {
      console.log(value.coords)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
