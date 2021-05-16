import { Component } from '@angular/core';
import { HistoryPage } from '../history/history';
import { RunPage } from '../run/run';

import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public color = '#0c6e9b';

  tab1Root = RunPage;
  tab2Root = HistoryPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
