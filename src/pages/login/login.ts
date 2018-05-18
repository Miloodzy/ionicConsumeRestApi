import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

import { AuthProvider } from '../../providers/auth/auth';
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
export class LoginPage {
  auth= {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authent: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.auth);
    this.authent.signInWithEmail(this.auth)
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.loginError = error.message
    );
  }

  log() {
    this.navCtrl.push(HomePage);
  }

}
