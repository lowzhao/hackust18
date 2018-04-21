import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private calendar: Calendar) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

}
