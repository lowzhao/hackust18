import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { timer } from 'rxjs/observable/timer';
import { GraphpagePage } from '../pages/graphpage/graphpage';
import { CalendarPage } from '../pages/calendar/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  showSplash = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //this.initializeApp();
      statusBar.styleDefault();
      splashScreen.hide();  // <-- hide static image

      timer(3000).subscribe(() => this.showSplash = false) 

    });
  }


}
