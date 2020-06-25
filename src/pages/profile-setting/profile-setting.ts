import { ChoisePage } from './../choise/choise';
import { User } from './../../model/user.model';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ProfileSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-setting',
  templateUrl: 'profile-setting.html',
})
export class ProfileSettingPage {
  user:User;
  name="";
  prename="";
  numtel=0;
  mail="";
  constructor(public storage: Storage,
    public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSettingPage');
    this.storage.get('user').then((val) => {
      this.user=val;

      console.log('this is user :'+ this.user);

      this.getData();
    });
  
    // console.log("aaa"+this.user.name);
  }
  getData(){
    this.name=this.user.name;
    this.prename=this.user.prename;
    this.numtel=this.user.num;
    this.mail=this.user.email;
  }

  update(name:string,prename:string,mail:string,num:number){
    this.user.name=name;
    this.user.prename=prename;
    this.user.email=mail;
    this.user.num=num;
    var ref = firebase.database().ref("users/" + this.user.id);
    ref.update({ name: name });
    ref.update({ prename: prename });
    ref.update({ email: mail });
    ref.update({ num: num });
    this.storage.set('user', this.user);

  }

  changeval(){
    this.update(this.name,this.prename,this.mail,this.numtel);
    this.navCtrl.push(ChoisePage);

  }
}
