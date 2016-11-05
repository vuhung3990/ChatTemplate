import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Chat } from '../chat/chat';

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
  historyConversations: any[] = [
    {
      avatar: "https://pbs.twimg.com/profile_images/378800000333141325/c781fd523beb5093b744c3cb1224cf37_400x400.png",
      name: "Khaleesi",
      isRead: false,
      message: "Hash yer dothrae chek?",
      dateTime: "3:43 pm"
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
      name: "Ned Stark",
      isRead: false,
      message: "hi, i don't understand Dothraki language",
      dateTime: "1:43 am"
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg",
      name: "Jon Snow",
      isRead: true,
      message: "do you want to hunt with me?",
      dateTime: "3:43 pm"
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/637660458187649024/u90FeDjX.jpg",
      name: "Varys (King Landing)",
      isRead: false,
      message: "have a good news for you, call me now",
      dateTime: "yesterday"
    },
    {
      avatar: "https://pbs.twimg.com/profile_images/703652594586152960/CuijbaHC.jpg",
      name: "Jorah Mormont",
      isRead: true,
      message: "can i take care of your wife before you die?",
      dateTime: "sep 15"
    }
  ]
  constructor(private app: App) { }

  openChat(index: number) {
    let param: any = {
      title: this.historyConversations[index].name,
      history: [
        {
          isMine: false,
          message: this.historyConversations[index].message
        }
      ]
    }
    this.app.getRootNav().push(Chat, param);
  }

  ionViewDidLoad() {
    console.log('Hello History Page');
  }

}
