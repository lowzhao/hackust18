import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage
{

	constructor(public navCtrl: NavController)
	{

	}

	clickd()
	{
		this.navCtrl.push(CalculatorPage);
	}
}
