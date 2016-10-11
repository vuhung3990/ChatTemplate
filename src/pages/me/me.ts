import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Me page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class Me {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Me Page');
  }

}
