import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { timer } from 'rxjs/observable/timer'
import { graphpage } from '../pages/graphpage/graphpage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //this.initializeApp();
      statusBar.styleDefault();
      splashScreen.hide();  // <-- hide static image

      timer(3000).subscribe(() => this.showSplash = false) 

    });
  }


}
