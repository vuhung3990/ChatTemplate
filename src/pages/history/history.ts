import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class History {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello History Page');
  }

}
