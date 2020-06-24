import { LoginPage } from './../login/login';
import { OrganizePage } from './../organize/organize';
import { TripListPage } from './../trip-list/trip-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ChoisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choise',
  templateUrl: 'choise.html',
})
export class ChoisePage {

  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    firebase.auth().onAuthStateChanged(function(user){
      if(!user){
          navCtrl.setRoot(HomePage);
      }
    })
  }

  ionViewDidLoad() {
    this.storage.get('user').then((val) => {
      console.log('this is user :', val);
    });
    console.log('ionViewDidLoad ChoisePage');
  }

  choise(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'AKHTAR AY ?',
      buttons: [
        {
          text: 'THEZ CHKOUN M3AK?',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(OrganizePage);
          }
        },{
          text: 'TERKEB M3A CHKOUN ?',
          handler: () => {
            this.navCtrl.push(TripListPage);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ToTrip(){
    this.navCtrl.push(TripListPage);

  }

  }


