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
	adding : boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
	}

	ionViewDidLoad()
	{
		this.progress = 10;
		console.log('ionViewDidLoad TestingPage');
		this.adding = false;
	}
	clicked()
	{
		// this.navCtrl.push(AboutPage);
		this.adding = true;

	}

}
