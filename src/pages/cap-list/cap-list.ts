import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CapItemsProvider } from '../../providers/cap-items/cap-items';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CapListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'capListPage'
})
@Component({
  selector: 'page-cap-list',
  templateUrl: 'cap-list.html',
})
export class CapListPage {

  public myIndex: number;
  public title:string = "CAP Items";

  items:Observable<any> ;

  readonly PENDING_TYPE:string = "PENDING";
  readonly SCHEDULED_TYPE:string = "SCHEDULED";
  readonly COMPLETED_TYPE:string = "COMPLETED";

  type: string;
  activeMenu: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public capItemsProvider: CapItemsProvider, public app:App) {
    console.log('==> Passed Params: ' + JSON.stringify(navParams.data));

    if(this.navParams.data.name === this.PENDING_TYPE){
      this.title = "Pending Items";
      this.type = this.PENDING_TYPE;
    } else if (this.navParams.data.name === this.SCHEDULED_TYPE) {
      this.title = "Scheduled Items";
      this.type = this.SCHEDULED_TYPE;
    } else {
      this.title = "Completed Items";
      this.type = this.COMPLETED_TYPE;
    }
  }

  ionViewDidLoad() {
    this.getItems(this.type);
  }

  getItems(value){
    // this.capItemsProvider.findAll(value)
    //   .then(data => {
    //     this.items = data;
    //   });

    this.items = this.capItemsProvider.findAll(value);
  }

  itemSelected(item:any){
    this.navCtrl.push('capDetail', {item:item});
  }

  addItem(){
    this.navCtrl.push('capDetail');
  }
}
