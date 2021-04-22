import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit{
  min: number = 0;
  max: number = 60;
  start: number = 15;
  pickedTolerance: number = this.start;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
  }

  rangeChanged(event: any) {
    console.log(event.value)
    this.pickedTolerance = event.value;
  }

}
