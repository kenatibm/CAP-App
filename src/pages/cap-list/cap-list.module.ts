import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapListPage } from './cap-list';

@NgModule({
  declarations: [
    CapListPage,
  ],
  imports: [
    IonicPageModule.forChild(CapListPage),
  ],
})
export class CapListPageModule {}
