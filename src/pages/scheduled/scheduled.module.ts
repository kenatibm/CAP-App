import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduledPage } from './scheduled';

@NgModule({
  declarations: [
    ScheduledPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduledPage),
  ],
})
export class ScheduledPageModule {}
