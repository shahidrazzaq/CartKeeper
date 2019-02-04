import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  continueToThank(event, item) {
    this.navCtrl.push(ThankyouPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
