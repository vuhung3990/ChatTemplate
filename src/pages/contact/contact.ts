import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {

  constructor(public navCtrl: NavController) {
    this.initialContacts();
  }
  contacts: any[];
  ionViewDidLoad() {
    console.log('Hello Contact Page');
  }

  initialContacts() {
    this.contacts = [
      {
        avatar: "https://pbs.twimg.com/profile_images/378800000333141325/c781fd523beb5093b744c3cb1224cf37_400x400.png",
        name: "Khaleesi",
        shortDesc: "Daenerys Stormborn and Mother of Dragons"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
        name: "Ned Stark",
        shortDesc: "Lord of Winterfell, Lord Paramount and Warden of the North"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg",
        name: "Jon Snow",
        shortDesc: "Team Leader of Night's Watch"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/637660458187649024/u90FeDjX.jpg",
        name: "Varys (King Landing)",
        shortDesc: "Master of Whisperers on the King's Small Council"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/703652594586152960/CuijbaHC.jpg",
        name: "Jorah Mormont",
        shortDesc: "Lord of Friendzone"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/716446800207618048/p7VNqAow.jpg",
        name: "Aria Stark",
        shortDesc: "A girld has no name"
      },
      {
        avatar: "https://s3.amazonaws.com/topz/ca2ef6900b0b302426ae06618aa0797b8fd58333.jpeg",
        name: "Sansa Stark",
        shortDesc: "Daughter of Lord Eddard Stark"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/690354987910746112/CkTUjjci_400x400.png",
        name: "Bran Stark",
        shortDesc: "Three-eyed Raven"
      },
      {
        avatar: "https://66.media.tumblr.com/avatar_70ed18cf811e_128.png",
        name: "Brienne Of Tarth",
        shortDesc: "The Maid of Tarth"
      },
      {
        avatar: "http://pm1.narvii.com/6057/4f5ac44f0498931fcb3752b1a7d5de0e0e74665a_128.jpg",
        name: "Jaime Lannister",
        shortDesc: "Kingslayer"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/722250163058774016/OfPU5LLt.jpg",
        name: "Tyrion Lannister",
        shortDesc: "Hand of the King"
      },
      {
        avatar: "https://66.media.tumblr.com/avatar_3c7dc6f6b1e4_128.png",
        name: "Tywin Lannister",
        shortDesc: "Richest man in the Seven Kingdoms"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/729793574158618625/Ts_IU8wL.jpg",
        name: "Oberyn Martell",
        shortDesc: "The Red Viper of Dorne"
      },
      {
        avatar: "https://pbs.twimg.com/profile_images/599644019031805952/Z42HW2hC_400x400.jpg",
        name: "Stannis Baratheon",
        shortDesc: "Lord of Dragonstone"
      }
    ];
  }

  filter(event: any) {
    this.initialContacts();
    let val: string = event.target.value;
    if (val && val.trim() != '') {
      this.contacts = this.contacts.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
