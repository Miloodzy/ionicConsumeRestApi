import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestServiceProvider } from '../../providers/rest-service/rest-service';
/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  user = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }
  
  login() {

    console.log('Add User Page');
    console.log(this.user);
    this.restService.postRestApi(this.user)
    .subscribe(
      (data)=>{
        console.log(data);
        this.user = data ;
      },
      (error)=>{
        console.error(error);
      }
    )
  }

}
