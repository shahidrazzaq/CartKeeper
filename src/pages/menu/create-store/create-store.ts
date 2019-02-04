import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Store} from "../../../interfaces/store"

@IonicPage()
@Component({
  selector: 'page-create-store',
  templateUrl: 'create-store.html',
})
export class CreateStorePage {
  store : Store;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: Http) {
      this.store = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStorePage');
  }
  createStore(){
    console.log(this.store);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:8080/store/addStore', this.store, requestOptions)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }
}
