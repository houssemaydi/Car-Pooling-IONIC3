import { Trip } from './../../model/trip.model';
import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import { snapshotToArray } from '../../app/envirement';
import { VALID } from '@angular/forms/src/model';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  name:string;
  prename:string;
  email:string;
  userr;
  num:any;
  ref = firebase.database().ref('trips/');
  items=[];
  tab: Trip[] = [];
  tabib: Trip[] = [];
  id;
  active:string="";
  activeTrip;
  constructor(public loadingCtrl: LoadingController,public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get("user").then((val) => {
      this.name=val.name;
      this.prename=val.prename;
      this.email=val.email;
      this.num=val.num;
      this.id=val.id;
      this.active=val.activeTripId;
      console.log("this.activeTrip"+val.activeTripId);
      this.activeTrip=this.getTripbyId(val.activeTripId);
      console.log("getTripbyId" + this.activeTrip);
  });
    this.presentLoading();
    this.ref.on('value', resp =>{
      this.items = snapshotToArray(resp);
      
    });
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

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
    
  }


getActiveTrip(){
  this.items.forEach(function (value) 
  {

      if (this.active== value.id) {
        this.activeTrip=value;
     
    }
  }) ;
   console.log("willenter : "+this.activeTrip);

}

  ionViewDidLoad() {

    console.log('ionViewDidLoad MyprofilePage');


  
  }


  getuserTrips(idd:string){
    var tabb= [];
    console.log(this.userr);

    console.log("items: "+ this.items);
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

  


    // this.item.paticipations.forEach(function (value) {
    // this.item.paticipations.every(value => {
    //   console.log("value in test: " + value.id);
    //   console.log("Idr: " + idR);

    //   if (value.id == idR) {
    //     console.log("%c west test mawjoud", "color: green");
    //     return true;

    //   } else {
    //     console.log("%c lbara men test mawjoud", "color: red");
    //   }
    // });


}
