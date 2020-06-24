import { ProfileSettingPage } from './../pages/profile-setting/profile-setting';
import { MyprofilePage } from './../pages/myprofile/myprofile';
import { TripListPage } from './../pages/trip-list/trip-list';
import { ProfilePage } from './../pages/profile/profile';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { ChoisePage } from './../pages/choise/choise';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './envirement';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Odekhl lil Compte', component: HomePage },
      { title: 'Hay Ta3mel Compte ? ', component: SignUpPage },
      { title: 'Profili Ena', component: MyprofilePage },
      { title: 'Covoiturage ?', component: ChoisePage },
      { title: 'Badel f Profili', component: ProfileSettingPage },



    ];
    firebase.initializeApp(FIREBASE_CONFIG);

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
