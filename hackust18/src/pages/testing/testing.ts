import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
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


	ak = [
		{
			title: "Flat",
			expectation: "15/12/2023",
			progress: 10,
			fund: 40000,
			condition: "ON TRACK"
		}
	];
	// progress: number;
	adding: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
		// this.progress = 10;
		// if navParams.get()
		var temp = this.navParams.get("data");
		if (this.navParams.get("data") != undefined)
		{
			var dataTemp = {
				title: temp.title,
				expectation: "30/1/2030",
				progress: 0,
				fund: temp.cost,
				condition: "ON TRACK"
			}
			this.ak.push(dataTemp);
		}


	}

	ionViewDidLoad()
	{
		// this.progress = 10;
		console.log('ionViewDidLoad TestingPage');
		this.adding = false;
	}
	clickd()
	{
		this.navCtrl.push(AddGoalPage);
		// this.adding = true;

	}

}
