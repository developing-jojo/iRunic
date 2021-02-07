import { NgModule } from '@angular/core';
import { GeolocationComponent } from './geolocation/geolocation';
import { StepcounterComponent } from './stepcounter/stepcounter';

@NgModule({
	declarations: [GeolocationComponent,
    StepcounterComponent],
	imports: [],
	exports: [GeolocationComponent,
    StepcounterComponent]
})
export class ComponentsModule {}
