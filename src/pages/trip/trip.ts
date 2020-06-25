import { UpdateTripPage } from './../update-trip/update-trip';
import { User } from "./../../model/user.model";
import { Trip } from "./../../model/trip.model";
import { ProfilePage } from "./../profile/profile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import firebase from "firebase";

/**
 * Generated class for the TripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-trip",
  templateUrl: "trip.html",
})
export class TripPage {
  id: string;
  item: Trip;
  userr :User;
  tab: User[] = [];
  reserved: boolean = false;
  buttonValue: string = "";

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.item = this.navParams.get("trip");

    console.log(this.item);

    this.storage.get("user").then((val) => {
      console.log("status before " + this.reserved);

      if (this.reserved == false) {
        console.log("storage :  " + val.id + "***************");
        this.userr = val;
        this.reserved = this.testReservation(val.id);
        console.log("status after " + this.reserved);
        this.setvalue();

        console.log("this is userr" + this.userr);
      }
    });
   
  }

  testReservation(idR: string): boolean {
    for (let value of this.item.paticipations) {
      if (value.id == idR) {
        console.log("%c west test mawjoud", "color: green");
        this.reserved=true;
        return true;
      } else {
        console.log("%c lbara men test mawjoud", "color: red");
      }
    }
    //return false;
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

  setvalue() {
    if (this.reserved == true) {
      this.buttonValue = "- BATALT";
    }
    else{
      this.buttonValue = "+ RESERVI";

    }
  }
  ionViewDidLoad() { //************************** */
  
    //************************** */
    // this.storage.get("user").then((val) => {
    //   console.log("status before " + this.reserved);

    //   if (this.reserved == false) {
    //     console.log("storage :  " + val.id + "***************");
    //     this.userr = val;
    //     this.reserved = this.testReservation(val.id);
    //     console.log("status after " + this.reserved);

    //     console.log("this is userr" + this.userr);
    //   }
    // });
    // this.setvalue();
    console.log("ionViewDidLoad TripPage");
  }
  toProfile() {
        this.navCtrl.push(ProfilePage,{u:this.item.user});

  }

  booking(key) {
    // if(this.item.paticipations.indexOf(this.userr)<0)
    if (this.reserved == false) {
      console.log("%c west booking reseved false", "color:bleu");
      this.tab = this.item.paticipations;
      this.tab.push(this.userr);
      console.log("taaaaab" + this.tab);
      var ref = firebase.database().ref("trips/" + key);
      ref.update({ paticipations: this.tab });
      console.log(this.item);
      console.log(this.item.paticipations);
      console.log(this.userr);
      this.reserved = true;
      this.setvalue();

    } else {
      console.log("%c west booking reseved true", "color:bleu");
      this.tab = this.item.paticipations;
      console.log("taaaaab" + this.tab);
      var ref = firebase.database().ref("trips/" + key);
      const index = this.tab.indexOf(this.userr, 0);
      console.log(index);
      if (index > -1) {
        this.tab.splice(index, 1);
      }
      ref.update({ paticipations: this.tab });
      console.log(this.item);
      console.log(this.item.paticipations);
      console.log(this.userr);
      this.reserved = false;
          this.setvalue();

    }
    // this.buttonValue = "Cancel";

    //this.item.paticipations.push(this.userr);
  }


  update(){
    console.log("aaaaaaaaaaaaaaaaa")
    this.navCtrl.push(UpdateTripPage,{trip:this.item});

  }
}
