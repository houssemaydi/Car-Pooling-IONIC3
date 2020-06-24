import { TestPage } from "./../test/test";
import { User } from "./../../model/user.model";
import { ChoisePage } from "./../choise/choise";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SignUpPage } from "../sign-up/sign-up";
// start fire base
import * as firebase from "firebase";
// end fire base
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  user:User;
    liste3: any = [];
  email: string='';
  password: string;
  id: string;
  ref = firebase.database().ref("users/");
  finalList: User[] = [];

  constructor(public storage: Storage, public navCtrl: NavController) {
    this.user = new User("aaa","aaa","aaa","aaa","aaa",5555);
    let ref = firebase.database().ref("users");
    this.email='';
    ref.on("value", (resp) => {
      this.liste3 = [];
      var users = resp.val();
      var keys = Object.keys(users);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var email = users[k].email;
        var name = users[k].name;
        var uid = users[k].id;
        var password = users[k].password;
        var phone = users[k].num;
        var prename = users[k].prename;
        let userr = new User(uid, name, prename, email, password, phone);
        userr.activeTripId=users[k].activeTripId;
        this.liste3.push(userr);
      }
    });
    // Hethy k tebda mekech 7alel compte thezek ken lil login "Guard"
    // ****************************************************************
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(!user){
    //       navCtrl.setRoot(HomePage);
    //   }
    // })
    // ****************************************************************
    // start fire base
    // let upload = this.ref.push();
    // upload.set(user);
    // end fire base
    //storage.set('name', 'Max');
  }

  ngOnInit() {

    // firebase.auth().onAuthStateChanged((user) =>  {
    //   if (!user) {
    //     this.navCtrl.setRoot(HomePage);
    //   }
    // });
  }
  async login() {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      if (result) {
        console.log(this.email);
        //this.methode2();
        //this.info();
        this.tester2(this.email,this.user);
        console.log(this.liste3);
        console.log(this.user);
        this.storage.set('user', this.user);

        this.navCtrl.push(ChoisePage);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // methode2() {
  //   var user = firebase.auth().currentUser;
  //   var name, emaill, photoUrl, uid, emailVerified;

  //   if (user != null) {
  //     name = user.displayName;
  //     emaill = user.email;
  //     photoUrl = user.photoURL;
  //     emailVerified = user.emailVerified;
  //     uid = user.uid;
  //   }

  //   this.email = emaill;
  //   console.log(this.email);
  // }

  // info() {
  //   var user = firebase.auth().currentUser;

  //   if (user != null) {
  //     user.providerData.forEach(function (profile) {
  //       console.log("Sign-in provider: " + profile.providerId);
  //       console.log("  Provider-specific UID: " + profile.uid);
  //       console.log("  Name: " + profile.displayName);
  //       console.log("  Email: " + profile.email);
  //       console.log("  Photo URL: " + profile.photoURL);
  //     });
  //   }
  //   if (user != null) {
  //     this.ref.on("value", this.gotData, this.errData);

  //     // user.providerData.forEach(function (profile) {

  //     //     console.log("Sign-in provider: " + profile.providerId);
  //     //     console.log("  Provider-specific UID: " + profile.uid);
  //     //     console.log("  Name: " + profile.displayName);
  //     //     console.log("  Email: " + profile.email);
  //     //     console.log("  Photo URL: " + profile.photoURL);

  //     // });
  //   }
  // }

  // gotData(data) {
  //   var listeUsers: User[] = [];
  //   var users = data.val();
  //   var keys = Object.keys(users);
  //   console.log(keys);
  //   for (var i = 0; i < keys.length; i++) {
  //     var k = keys[i];
  //     var email = users[k].email;
  //     var name = users[k].name;
  //     var uid = users[k].id;
  //     var prename = users[k].prename;
  //     var password = users[k].password;
  //     var phone = users[k].phone;
  //     var activeTripId = users[k].activeTripId;
  //     var picture = users[k].picture;
  //     var rating = users[k].rating;
  //     var verification = users[k].verification;
  //     //  if (newmail === email){
  //     let userr = new User(uid, name, prename, email, password, phone);
  //     userr.setPicture(picture);
  //     userr.setRating(rating);
  //     userr.setActiveTripId(activeTripId);
  //     userr.setVerification(verification);
  //     listeUsers.push(userr);
  //     this.finalList.push(userr);
  //     // console.log(email, name, uid);
  //     console.log(listeUsers);

  //     //}
  //   }

  //   console.log("the final list is " + this.finalList);

  //   return listeUsers;
  // }
  // errData(err) {
  //   console.log(err);
  // }
  nextSignUp() {
    this.navCtrl.push(SignUpPage);
  }
  test() {
    this.navCtrl.push(TestPage);
  }
  tester2(mail: string,userf: User) {
console.log(this.user);
console.log(this.email);
    this.liste3.forEach(function (value) {
      console.log(value.num);
  if (value.email == mail){
    console.log(value.id);
    userf.setId(value.id);
    userf.setName(value.name);
    userf.setPrename(value.prename);
    userf.setEmail(value.email);
    userf.setNum(value.num);
    userf.setPicture(value.picture);
    userf.setRating(value.rating);
    userf.activeTripId=value.activeTripId;
    userf.setVerification(value.verification);
    console.log("fffffffffffffffffff"+userf.activeTripId);


    // this.user.setId(value.id);
    // console.log(this.user);


  }
});

  }
}
