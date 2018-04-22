import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { AlertController } from 'ionic-angular';

import { DatePickerModule } from 'ionic3-datepicker';
import { DatePickerDirective } from 'ionic3-datepicker';
import { GraphpagePage } from '../graphpage/graphpage';

import { BudgetDailyPage } from '../budget-daily/budget-daily';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDateb: Date = new Date(2015, 1, 1);
  //public disabledDates: Date[] = [];/[new Date(2017, 7, 14)];

  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date()

  constructor(public navCtrl: NavController) {

  }
  public Log(stuff): void {
    console.log(stuff);
  }

  public event(data: Date): void {
    this.localDate = data;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }


  //

   public localDate2: Date = new Date();
  public initDate2: Date = new Date();
  public initDateb2: Date = new Date(2015, 1, 1);
  //public disabledDates2: Date[] = [];//[new Date(2017, 7, 14)];

  public maxDate2: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min2: Date = new Date()


  public Log2(stuff): void {
    console.log(stuff);
  }

  public event2(data: Date): void {
    this.localDate2 = data;
  }
  setDate2(date: Date) {
    console.log(date);
    this.initDate2 = date;
  }

  public checkDates(){
      if (this.initDate.getDate() < this.initDate2.getDate()){
        this.navCtrl.push(GraphpagePage);
      }
      else{
        this.navCtrl.push(BudgetDailyPage);
      }
  }


}
