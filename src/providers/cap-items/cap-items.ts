import { Injectable } from '@angular/core';

import capitems from './capitems';

@Injectable()
export class CapItemsProvider {

  constructor() {
    console.log('Hello CapItemsProvider Provider');
  }

  findAll(type:string) {
    var items:any = [];

    for (var i in capitems) {
      if(capitems[i].status == type){
        items.push(JSON.parse(JSON.stringify(capitems[i])));
      }
    }

    console.log("==> " + JSON.stringify(items));
    return items;
    //return Promise.resolve(items);
  }

  save(capitem:any){
    if(capitem._id == undefined){
      capitems.push(capitem);
    }

    return Promise.resolve(capitem);
  }

}
