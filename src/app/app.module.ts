import {ForgotPassword} from "../pages/forgot-password/forgot-password";
import {Me} from "../pages/me/me";
import {Contact} from "../pages/contact/contact";
import {Main} from "../pages/main/main";
import {Login} from "../pages/login/login";
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {Signup} from "../pages/signup/signup";
import {History} from "../pages/history/history";

import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
    declarations: [
        MyApp,
        Login,
        Signup,
        Main,
        History,
        Contact,
        Me,
        ForgotPassword
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    exports: [BrowserModule, HttpModule, TranslateModule],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Login,
        Signup,
        Main,
        History,
        Contact,
        Me,
        ForgotPassword
    ],
    providers: []
})
export class AppModule { }
