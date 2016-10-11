import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { History } from '../history/history'
import { Contact } from '../contact/contact'
import { Me } from '../me/me'

/*
  Generated class for the Main tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class Main {

  tab1Root: any = History;
  tab2Root: any = Contact;
  tab3Root: any = Me;

  /** unread message count */
  unReadMsgCount: number = 3;
  contactRequestCount: number = 0;
  constructor(public navCtrl: NavController) {

  }

}
