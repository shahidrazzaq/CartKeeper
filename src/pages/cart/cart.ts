import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { AddressPage } from '../address/address';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  continueToAddress(event, item) {
    this.navCtrl.push(AddressPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
