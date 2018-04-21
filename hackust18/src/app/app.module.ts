import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { TestingPage } from '../pages/testing/testing';
import { Testing2Page } from '../pages/testing2/testing2';
import { GraphpagePage } from '../pages/graphpage/graphpage';
import { CalendarPage } from '../pages/calendar/calendar';

import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddGoalComponent } from '../components/add-goal/add-goal';
import { Calendar } from '@ionic-native/calendar';
import { AddEventPage } from '../pages/add-event/add-event';
import { DatePickerModule } from 'ionic3-datepicker';

import { CalculatorPage } from '../pages/calculator/calculator';


@NgModule({
  declarations: [
	MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	TabsPage,
	TestingPage,
	Testing2Page,
	LoginPage,
    AddGoalComponent,
    GraphpagePage,
	CalendarPage,
	CalculatorPage
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DatePickerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	TestingPage,
	Testing2Page,
	LoginPage,
    AddGoalComponent,
    GraphpagePage,
	CalendarPage,
	CalculatorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
	Camera, Calendar, DatePickerModule
  ]
})
export class AppModule {}
