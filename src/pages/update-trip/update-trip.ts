import { Trip } from "./../../model/trip.model";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../model/user.model";
import firebase from "firebase";
import { ThrowStmt } from "@angular/compiler";

/**
 * Generated class for the UpdateTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-update-trip",
  templateUrl: "update-trip.html",
})
export class UpdateTripPage {
  departure: string;
  destination: string;
  dateAndTime: Date;
  availablePlaces: number;
  price: number;
  bags: number;
  car: string;
  comment: string;
  tripupdate: Trip;

  participations: User[] = [];
  ref = firebase.database().ref("trips/");
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tripupdate = this.navParams.get("trip");
    this.departure = this.tripupdate.departure;
    this.destination = this.tripupdate.destination;
    this.dateAndTime = this.tripupdate.date;
    this.availablePlaces = this.tripupdate.availablePlaces;
    this.price = this.tripupdate.price;
    this.bags = this.tripupdate.bags;
    this.comment = this.tripupdate.comment;
    this.car = this.tripupdate.car;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdateTripPage");
    console.log(this.tripupdate.id)

  }

  update(
    departure: string,
    destination: string,
    dateAndTime: Date,
    availablePlaces: number,
    price: number,
    bags: number,
    car: string,
    comment: string
  ) {
    console.log("in update");
    var ref = firebase.database().ref("trips/" + this.tripupdate.id);
    ref.update({ departure: departure });
    ref.update({ destination: destination });
    ref.update({ date: dateAndTime });
    ref.update({ availablePlaces: availablePlaces });
    ref.update({ price: price });

    ref.update({ bags: bags });
    ref.update({ car: car });
    ref.update({ comment: comment });


  }

  changeval() {
    this.update(this.departure, this.destination, this.dateAndTime, this.availablePlaces,this.price, this.bags, this.car,this.comment);
  }
}
