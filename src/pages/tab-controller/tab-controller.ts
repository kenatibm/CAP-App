import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TabControllerPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage({
  name: 'tabController'
})
@Component({
  selector: 'page-tab-controller',
  templateUrl: 'tab-controller.html'
})
export class TabControllerPage {

  pendingRoot = 'capListPage';
  scheduledRoot = 'capListPage';
  completedRoot = 'capListPage';

  readonly PENDING_TYPE:string = "PENDING";
  readonly SCHEDULED_TYPE:string = "SCHEDULED";
  readonly COMPLETED_TYPE:string = "COMPLETED";

  mySelectedIndex:number;

  pendingParams = {name: this.PENDING_TYPE};
  scheduledParams = {name: this.SCHEDULED_TYPE};
  completedParams = {name: this.COMPLETED_TYPE};

  constructor(public app: App, public navCtrl: NavController, public navParams:NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
