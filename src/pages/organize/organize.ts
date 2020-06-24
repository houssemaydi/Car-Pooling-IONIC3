import { TripListPage } from './../trip-list/trip-list';
import { User } from './../../model/user.model';
import { Trip } from './../../model/trip.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// start fire base
import * as firebase from "firebase";
// end fire base
import { Storage } from "@ionic/storage";
/**
 * Generated class for the OrganizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organize',
  templateUrl: 'organize.html',
})
export class OrganizePage {
  departure: string;
  destination: string;
  dateAndTime: Date;
  availablePlaces: number;
  price: number;
  bags: number;
  car: string;
  comment: string;
  participations: User[]=[];
  ref = firebase.database().ref('trips/');

  constructor(public alertCtrl: AlertController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizePage');
  }

 
  async orgenize(){
    let ref = firebase.database().ref("trips");
    let key= ref.push().key;
    let ownerId: string;
    this.storage.get('user').then((val) => {

      firebase.database().ref("users/"+val.id).update({activeTripId:key});
      console.log('this is user :', val);
      ownerId = val.id;  
      this.participations.push(val);
      console.log('this is part  :', this.participations);

      
      console.log(ownerId);
      let trip = new Trip(key,val,this.departure,this.destination,this.car,this.price,this.dateAndTime,this.comment,this.availablePlaces,this.bags,this.participations);
     // var uid = trip.uid;

      //userr.setId(uid);
      let upload = firebase.database().ref('trips/').push();
      upload.set(trip);
//       var key = Object.keys(snapshot.val())[0];
// console.log(key);
this.showAlert();
this.navCtrl.push(TripListPage);

      console.log(trip);
      });

}
showAlert() {
  const alert = this.alertCtrl.create({
    title: 'Rabby Iwaselek Selem' ,
    buttons: ['OK']
  });
  alert.present();
}

}
