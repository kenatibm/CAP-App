import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  public loading: Loading;
  public loginError:string="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authProvider:AuthProvider, 
    public loadingCtrl:LoadingController, 
    public formBuilder:FormBuilder) {

      this.loginForm = formBuilder.group({
        username: ['', Validators.compose([Validators.minLength(3), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(3), Validators.required])]
      });

  }

  ionViewDidLoad() {
    console.log('==> ionViewDidLoad LoginPage');
  }

  loginUser(){
    console.log("==> USERNAME: " + this.loginForm.value.username);
    this.loginError = "";

    if(!this.loginForm.valid){
      console.log('==> this.loginForm.value');
    } else {
      this.authProvider.login(this.loginForm.value.username, this.loginForm.value.password)
        .then(AuthProvider => {
          this.navCtrl.setRoot('tabController');
          console.log("==> Login Success");
        }, error => {
          this.loginError = error.message;
          console.log("==> Login Error: " + error.message);
        });
    }
  }

}
