import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailValidator } from '@angular/forms';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/envirement';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  id: string;
  name: string;
  prename: string;
  email: string;
  password: string ;
  phone: number;
  ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

 async createAccount(){
  let userr = new User(" ",this.name,this.prename,this.email,this.password,this.phone);


    const result = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password);
    firebase.auth().onAuthStateChanged(function(user) {
      if (result) {
        // User is signed in.
        let ref = firebase.database().ref('users/');
        let key= ref.push().key;
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var providerData = user.providerData;
        userr.setId(key);
        let upload = firebase.database().ref('users/').push();
        upload.set(userr);
        console.log(userr);
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
    

  }
  

}
