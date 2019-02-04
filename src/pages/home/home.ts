import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {CartPage} from "../cart/cart";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;

  constructor(private nav: NavController, private auth: AuthServiceProvider, public http:Http) {
    this.getUsers();
  }


  /*openCartPage(event, item) {
    this.navCtrl.push(CartPage, {
      item: item
    });
  }*/

// Sample code of get users for home page configure is later
  public getUsers() {
    let headers = new Headers(
      {
        'Authorization' : this.auth.getToken()
      });

    let options = new RequestOptions({ headers: headers });
    let url = 'http://localhost:8080/home/getAllUsers';
    this.http.get(url, options).map(res => res.json()).subscribe(
      data => {
        this.users = data.data;
      }
    );
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
