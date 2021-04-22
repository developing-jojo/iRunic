import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { HistoryPage } from '../pages/history/history';
import { RunPage } from '../pages/run/run';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    RunPage,
    HistoryPage,
    SettingsPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RunPage,
    HistoryPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    Geolocation,
    Pedometer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
