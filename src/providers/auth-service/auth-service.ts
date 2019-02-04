import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  static readonly LOGIN_URL = 'http://localhost:8080/home/login';

  static readonly REGISTER_URL = 'http://localhost:8080/home/registerUser';
  access: boolean;
  token: string;

  constructor(public http: Http) {}

  // Login
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials.");
    } else {
      return Observable.create(observer => {

        this.http.post(AuthServiceProvider.LOGIN_URL, credentials)
          .map(res => res.json())
          .subscribe( data => {
            console.log(data);

            if (data === true) {
              this.access = true;
            } else {
              this.access = false;
            }
          });

        setTimeout(() => {
          observer.next(this.access);
        }, 500);

        setTimeout(() => {
          observer.complete();
        }, 1000);


      }, err => console.error(err));
    }
  }

  // Register
  public register(credentials) {
    if (credentials.name === null || credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {

      var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      const requestOptions = new RequestOptions({ headers: headers });

      return Observable.create(observer => {

        this.http.post(AuthServiceProvider.REGISTER_URL, credentials,requestOptions)
          .map(res => res.json())
          .subscribe( data => {

            console.log(data);

          });

        observer.next(true);
        observer.complete();
      });
    }
  }

  // Get Token
  public getToken() {
    return "valid"
    //  return this.token;
  }

  // Logout
  public logout() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

}
