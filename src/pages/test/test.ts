import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  liste3: any = [];
  constructor(navCtrl: NavController, public navParams: NavParams) {
    let ref = firebase.database().ref('users');
    ref.on('value', resp => {
      this.liste3 = [];
      var users = resp.val();
      var keys = Object.keys(users);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var email = users[k].email;
        var name = users[k].name;
        var uid = users[k].id;
        var password = users[k].password;
        var phone = users[k].phone;
        var prename = users[k].prename;
        let userr = new User(uid, name, prename, email, password, phone);
        this.liste3.push(userr);
      }
    });
  }
  tester2() {
    console.log(this.liste3);
  }
}
 