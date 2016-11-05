import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Login } from '../pages/login/login';
import {Main} from "../pages/main/main";
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = Main;

  constructor(platform: Platform, translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // translate init
      translate.setDefaultLang('en');
      translate.use('en');
    });
  }
}
