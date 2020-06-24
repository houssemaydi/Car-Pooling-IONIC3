import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateTripPage } from './update-trip';

@NgModule({
  declarations: [
    UpdateTripPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateTripPage),
  ],
})
export class UpdateTripPageModule {}
