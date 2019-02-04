import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/menu/register/register';
import { CreateStorePage } from '../pages/menu/create-store/create-store';
import { StoreOwnerPage } from '../pages/menu/store-owner/store-owner';
import { MyAccountPage } from '../pages/menu/account/my-account/my-account';
import {LoginPage} from "../pages/menu/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Create Store', component: CreateStorePage },
      { title: 'My Store', component: StoreOwnerPage },
      { title: 'My Account', component: MyAccountPage },
      { title: 'SignUp/SignIn', component: RegisterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
