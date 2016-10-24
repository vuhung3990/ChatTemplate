import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from "ng2-translate";
/*
  Generated class for the ForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html'
})
export class ForgotPassword {

    constructor(public navCtrl: NavController, public translate: TranslateService) {

        this.translate.reloadLang('en').subscribe(() => {
            setTimeout(() => this.translate.use('en'), 0);
        });
    }

    ionViewDidLoad() {
        console.log('Hello ForgotPassword Page');
    }

    resetPassword() {
        console.log("resetPassword");
    }
}
