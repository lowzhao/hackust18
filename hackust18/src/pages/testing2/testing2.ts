import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartInvPage } from '../chart-inv/chart-inv';
import { ChartInv2Page } from '../chart-inv2/chart-inv2';

/**
 * Generated class for the Testing2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testing2',
  templateUrl: 'testing2.html',
})
export class Testing2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Testing2Page');
  }

  clickd1(){
	  this.navCtrl.push(ChartInvPage);
  }
  clickd2(){
	this.navCtrl.push(ChartInv2Page);
}
}
