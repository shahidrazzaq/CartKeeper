import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import {Category} from "../../../interfaces/category"
import {Http, Headers, RequestOptions} from "@angular/http";

/**
 * Generated class for the AddCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
  category : Category;

  constructor(private view: ViewController,public http: Http) {
    this.category = {};
  }

  addCategory(){
    console.log(this.category);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:8080/store/addCategory', this.category, requestOptions)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });

  }

  closeAddCategoryModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

}
