import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locationWatchStarted:boolean;
  locationSubscription:any;

  locationTraces = [];

  constructor(public navCtrl: NavController,
              private geolocation: Geolocation) {

  }

  getCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
