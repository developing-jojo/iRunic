import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { GeolocationComponent } from './geolocation/geolocation';
import { StepcounterComponent } from './stepcounter/stepcounter';
import { TimerComponent } from './timer/timer';

@NgModule({
	declarations: [GeolocationComponent,
    StepcounterComponent,
    TimerComponent],
  imports: [
    IonicModule
  ],
	exports: [GeolocationComponent,
    StepcounterComponent,
    TimerComponent]
})
export class ComponentsModule {}
