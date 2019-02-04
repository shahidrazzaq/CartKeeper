import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController } from 'ionic-angular';
import {AddCategoryPage} from "../add-category/add-category";
import {MyAccountPage} from "../account/my-account/my-account";

/**
 * Generated class for the StoreOwnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-owner',
  templateUrl: 'store-owner.html',
})
export class StoreOwnerPage {
  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreOwnerPage');
  }

  openAddCategoryModal(){
    const categoryModal = this.modal.create("AddCategoryPage");
    categoryModal.present();
  }

  /*openMyAccountPage(){
    const accountPage = this.navCtrl.setRoot(MyAccountPage);
  }*/

}
