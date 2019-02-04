import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/menu/login/login";
import {RegisterPage} from "../pages/menu/register/register";
import { StoreOwnerPage } from '../pages/menu/store-owner/store-owner';
import { MyAccountPage } from '../pages/menu/account/my-account/my-account';
import { CreateStorePage } from '../pages/menu/create-store/create-store';
import { CartPage } from '../pages/cart/cart';
import { AddressPage } from '../pages/address/address';
import { PaymentPage } from '../pages/payment/payment';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {HttpModule} from "@angular/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {RegisterPageModule} from "../pages/menu/register/register.module";


/*const firebaseAuth = {
  apiKey: "AIzaSyAuZN_o7N8PuCj0xG1IYioNUfTYZ0tPzAA",
  authDomain: "cartkeeper-5625.firebaseapp.com",
  databaseURL: "https://cartkeeper-5625.firebaseio.com",
  projectId: "cartkeeper-5625",
  storageBucket: "cartkeeper-5625.appspot.com",
  messagingSenderId: "799232701086"
};*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CartPage,
    AddressPage,
    PaymentPage,
    LoginPage,
    ThankyouPage,
    CreateStorePage,
    StoreOwnerPage,
    MyAccountPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    RegisterPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartPage,
    AddressPage,
    PaymentPage,
    LoginPage,
    RegisterPage,
    ThankyouPage,
    CreateStorePage,
    StoreOwnerPage,
    MyAccountPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}
