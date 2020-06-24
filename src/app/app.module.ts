import { UpdateTripPage } from './../pages/update-trip/update-trip';
import { ProfileSettingPage } from './../pages/profile-setting/profile-setting';
import { MyprofilePage } from './../pages/myprofile/myprofile';
import { TestPage } from './../pages/test/test';
import { TripPage } from './../pages/trip/trip';
import { ProfilePage } from './../pages/profile/profile';
import { TripListPage } from './../pages/trip-list/trip-list';
import { OrganizePage } from './../pages/organize/organize';
import { ChoisePage } from './../pages/choise/choise';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ChoisePage,
    OrganizePage,
    TripListPage,
    ProfilePage,
    TripPage,
    TestPage,
    MyprofilePage,
    ProfileSettingPage,
    UpdateTripPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),

    FormsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ChoisePage,
    OrganizePage,
    TripListPage,
    ProfilePage,
    TripPage,
    TestPage,
    MyprofilePage,
    ProfileSettingPage,
    UpdateTripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
