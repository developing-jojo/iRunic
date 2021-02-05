import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subscription: Subscription = new Subscription();

  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              private pedometer: Pedometer) {

  }

  getCoordinates() {
    console.log("Subscribed");
    this.subscription = this.geolocation.watchPosition().subscribe(value => console.log(value));
  }

  stopGettingCoords() {
    console.log("Unsubscribed");
    this.subscription.unsubscribe();
  }

  doSomePedometer() {
    console.log("Subscribed");
    this.pedometer.startPedometerUpdates()
      .subscribe(
        value => console.log(value)
      );
  }
}
