import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';


/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  continueToPayment(event, item) {
    this.navCtrl.push(PaymentPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

}
