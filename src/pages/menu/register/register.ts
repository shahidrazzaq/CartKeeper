import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from "../../home/home";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email')email;
  @ViewChild('password')password;

  constructor(private fire: AngularFireAuth , private alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  /*
  This function is used to create a new User in Angular Firebase
   */
  registerUser(){
    this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.email.value,this.password.value)
      .then( data =>{
        console.log("Registered!" , this.fire.auth.currentUser);
        this.alert("Registered!" );
      })
      .catch(error =>{
        console.log("Error found while registering user " , error);
        this.alert(error.message);
      })
  }

  /*
   This function is used to Sign in User in Angular Firebase
   */
  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
      .then(data=>{
        console.log("Logged in successfully" , this.fire.auth.currentUser);
        this.alert("Successfully Logged In" );
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error =>{
        console.log("Error found while login user " , error);
        this.alert(error.message);
      })
  }

  /*
   Custom Alert Message
   */
  alert(message : string){
    this.alertCtrl.create({
      title: 'Info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
