import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreOwnerPage } from './store-owner';

@NgModule({
  declarations: [
    StoreOwnerPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreOwnerPage),
  ],
})
export class StoreOwnerPageModule {}
