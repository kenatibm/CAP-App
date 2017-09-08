import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapItemsProvider } from '../../providers/cap-items/cap-items';
@IonicPage({
  name: "capDetail"
})
@Component({
  selector: 'page-cap-detail',
  templateUrl: 'cap-detail.html',
})
export class CapDetailPage {

  public capItem:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public capItemsProvider:CapItemsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapDetailPage');

    if(this.navParams.get('item') == undefined){
      console.log('==> Create a new CAP Item');
      this.capItem = {};
      this.capItem.status = "Pending";
      this.capItem.recordType = "ISSUE";
      this.capItem.priority = "Medium";
      this.capItem.severity = "High";
      console.log("==> CAP ITEM: " + JSON.stringify(this.capItem));
    } else {
      this.capItem = this.navParams.get('item');
      console.log('==> Edit existing CAP Item');
    }    
  }

  save(){
    this.capItemsProvider.save(this.capItem);
  }

}
