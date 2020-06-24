import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSettingPage } from './profile-setting';

@NgModule({
  declarations: [
    ProfileSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSettingPage),
  ],
})
export class ProfileSettingPageModule {}
