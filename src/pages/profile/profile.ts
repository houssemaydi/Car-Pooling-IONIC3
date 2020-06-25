import { snapshotToArray } from './../../app/envirement';
import { Trip } from './../../model/trip.model';
import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

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
  ref = firebase.database().ref('trips/');
  items=[];
  tab: Trip[] = [];
  tabib: Trip[] = [];
  id;
  active:string="";
  activeTrip;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ussr = this.navParams.get("u");
    this.ref.on('value', resp =>{
      this.items = snapshotToArray(resp);
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getuserTrips(idd:string){
    var tabb= [];

    this.items.forEach(function (value) 
    {
      console.log("valueeeeeee"+value);

      for (let val of value.paticipations) {
        console.log("vaaaaaaaal : "+val);

        console.log("from for :" + val.id);
        console.log("IDDD"+idd);

        if (idd == val.id) {
          tabb.push(value);
       }
      }
    })
    
    console.log(tabb);
    this.tab=tabb;
    console.log("this tab: " + this.tab);
    this.getTripbyId(this.active);
  }
  getTripbyId(id:string){
   
    for (let value of this.items) {
       console.log("valueee"+value.id);
      if (value.id == id) {
        this.tabib.push(value);
        return(value);
      } 
    }
  
   }
}
