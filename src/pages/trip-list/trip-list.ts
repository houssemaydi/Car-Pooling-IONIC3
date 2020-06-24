import { Trip } from './../../model/trip.model';
import { TripPage } from './../trip/trip';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/envirement';
import { Storage } from "@ionic/storage";
import { User } from '../../model/user.model';

/**
 * Generated class for the TripListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip-list',
  templateUrl: 'trip-list.html',
})
export class TripListPage {
  ref = firebase.database().ref('trips/');
  owner: User ;
  users =firebase.database().ref('users/');
  items;
  userList;
  name: string="";
  prename: string="";
  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp =>{
      this.items = snapshotToArray(resp);
      
    })
    this.users.on('value', resp =>{
      this.userList = snapshotToArray(resp);

    })
    this.storage.get('user').then((val) => {
      this.name = val.name;
      this.prename = val.prename;
      console.log('this is user :', val);
    });

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TripListPage');
    //this.getUsernameById("d6sQplnP0lZU7XbT21mcTWjY29W2");
  }
  getUsernameById(id: string) {
    console.log("getuserid");
    console.log(id);

    this.userList.forEach(function (value) {
      
      if (value.id == id){
        console.log("aheyaaaa");
        console.log(value.name);
        console.log("aheyaaaa");
        return value.name;
      }
        })
  }
    getUserName(value: any) {
    console.log(value.name);
  }
  detail(event ,item:Trip){
    this.navCtrl.push(TripPage,{trip:item});
    console.log("this is from list items: " + item)
  }

}
