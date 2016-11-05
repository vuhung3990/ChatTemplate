import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class Chat {
  message: string;
  conversation: any;

  constructor(private navParam: NavParams) {
    this.conversation = this.navParam.data;
  }

  ionViewDidLoad() {
    console.log('Hello Chat Page');
  }

  send(input: any){
    let tmp : any = {isMine: true, message: this.message};
    this.conversation.history.push(tmp);
    this.message = null;
    input.setFocus();
  }
}
