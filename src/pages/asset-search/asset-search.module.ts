import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetSearchPage } from './asset-search';

@NgModule({
  declarations: [
    AssetSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetSearchPage),
  ],
})
export class AssetSearchPageModule {}
