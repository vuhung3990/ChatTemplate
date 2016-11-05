import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Login } from '../login/login';

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

  constructor(private app: App) {}

  ionViewDidLoad() {
    console.log('Hello Me Page');
  }

  logout(){
    this.app.getRootNav().setRoot(Login);
  }

}
