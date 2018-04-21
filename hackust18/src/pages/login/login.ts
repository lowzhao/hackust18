import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage
{

	constructor(public navCtrl: NavController, public navParams: NavParams,
		private fire: AngularFireAuth)
	{
	}

	ionViewDidLoad()
	{
		console.log('ionViewDidLoad LoginPage');
	}

	loginWithFacebook()
	{
		this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res =>
		{
			// console.log(res);
		}
		)
	}

	logoutOfFacebook()
	{

	}

}
