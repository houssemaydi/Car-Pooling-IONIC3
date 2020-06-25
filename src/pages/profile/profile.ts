import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ussr:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ussr = this.navParams.get("u");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  

}
