import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestingPage } from '../testing/testing';

/**
 * Generated class for the AddGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-goal',
	templateUrl: 'add-goal.html',
})
export class AddGoalPage
{

	constructor(public navCtrl: NavController, public navParams: NavParams)
	{

	}
title:string;
cost:number;
	structure: any = { lower: 33, upper: 60 };
	onChange(ev: any)
	{
		console.log('Changed', ev);
	}

	ionViewDidLoad()
	{
		console.log('ionViewDidLoad AddGoalPage');
	}

	clickd()
	{
		this.navCtrl.push(TestingPage,
			{
				title:this.title,
				cost:this.cost,
				structure:this.structure
			});
	}

}
