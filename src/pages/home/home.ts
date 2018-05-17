import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public restProvider: RestServiceProvider) {
   console.log('Home Constructor'); 
  }
  
  ionViewDidLoad(){
    this.restProvider.getRestApi()
    .subscribe(
      (data)=>{
        console.log(data);  
      },
      (error)=>{
        console.error(error);
      }
    )
  }
} 

