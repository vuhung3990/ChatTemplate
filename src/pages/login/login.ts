import {HomePage} from "../home/home";
import {Signup} from "../signup/signup";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  /** go to signup page */
  signup(){
    this.navCtrl.push(Signup);
  }

  /** check valid & correct info => login */
  login(){
    this.navCtrl.setRoot(HomePage);
  }
}
