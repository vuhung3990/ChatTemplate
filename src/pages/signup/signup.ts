import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Signup Page');
  }

}
