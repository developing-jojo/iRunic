import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { Health } from "@ionic-native/health/ngx";
import { HealthKit } from "@ionic-native/health-kit/ngx";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              geolocation: Geolocation,
              health: Health,
              healthKit: HealthKit) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
