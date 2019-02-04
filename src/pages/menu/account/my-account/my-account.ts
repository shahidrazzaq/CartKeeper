import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {MyInfoPage} from "../my-info/my-info";
import {StoreInfoPage} from "../store-info/store-info";


/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  constructor(public navCtrl: NavController,private modal: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  openMyInfoModal(){
    const infoModal = this.modal.create("MyInfoPage");
    infoModal.present();
  }

  openStoreInfoModal(){
    const storeInfoModal = this.modal.create("StoreInfoPage");
    storeInfoModal.present();
  }
}
