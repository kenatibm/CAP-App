import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapDetailPage } from './cap-detail';

@NgModule({
  declarations: [
    CapDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CapDetailPage),
  ],
})
export class CapDetailPageModule {}
