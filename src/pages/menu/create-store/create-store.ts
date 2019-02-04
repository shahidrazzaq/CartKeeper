import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the CreateStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-store',
  templateUrl: 'create-store.html',
})
export class CreateStorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStorePage');
  }


  /*createStore() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = {
      storeType: this.store.type,
      storeName: this.store.name
    };

    this.http.post('http://localhost:8080/store/addStore', JSON.stringify(body), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }*/

}
