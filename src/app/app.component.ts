import { Component, ViewChild } from '@angular/core';
import { Platform, Events, MenuController, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';

import { AuthProvider } from '../providers/auth/auth';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
} 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public appName: String;
  public appVer: String;
  
  rootPage:any = 'login';

  constructor(public platform: Platform, 
    public events:Events, 
    public menuCtrl:MenuController, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public authProvider:AuthProvider,
    public toastCtrl: ToastController,
    private appVersion: AppVersion) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(this.platform.is('cordova')){
        // Get the app name stored in the config.xml file
        this.appVersion.getAppName().then(name => {
          console.log("==> APP NAME: " + name);
          this.appName = name;
        });

        // Get the app version stored in the config.xml file
        this.appVersion.getVersionNumber().then(version => {
          console.log("==> APP VERSION: " + version);
          this.appVer = version;
        });
      } else {
        this.appName = 'Not Available';
        this.appVer  = '0.0.0';
      }

    });
  }

  logout(){
    console.log("==> in logout()");
    this.authProvider.logout().then(AuthProvider => {
      this.nav.setRoot('login');
      console.log("==> User Logout Success.")
    }, error => {
      console.log("==> Logout Error: " + error.message);
    });
  }

  showSettings(){
    console.log("==> in showSettings()");
    let toast = this.toastCtrl.create({
      message: "No Application Settings available at this time. Go to http://mobilefirstplatform.ibmcloud.com for more information on IBM Mobile Foundation.",
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'middle'
    });
    toast.present();
  }

  showVersion(){
    console.log("==> in showVersion()");
    let toast = this.toastCtrl.create({
      message: "App Name: " + this.appName + " Ver: " + this.appVer,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}

