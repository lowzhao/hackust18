import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
/**
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-testing',
	templateUrl: 'testing.html',
})
export class TestingPage
{
	progress : number;


	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
		 this.progress = 10;
	}

	ionViewDidLoad()
	{
		console.log('ionViewDidLoad TestingPage');
	}
	onClick()
	{
		this.navCtrl.push(AboutPage);
	}

}
