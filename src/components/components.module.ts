import { NgModule } from '@angular/core';
import { GeolocationComponent } from './geolocation/geolocation';
import { StepcounterComponent } from './stepcounter/stepcounter';
import {IonicModule} from "ionic-angular/module";

@NgModule({
	declarations: [GeolocationComponent,
    StepcounterComponent],
  imports: [
    IonicModule
  ],
	exports: [GeolocationComponent,
    StepcounterComponent]
})
export class ComponentsModule {}
