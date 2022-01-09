import { NgModule } from '@angular/core';
import { IconTextModule } from '../../icon-text/icon-text.module';
import { UserActivityModule } from '../user-activity/user-activity.module';
import { CarInfoComponent } from './car-info.component';

@NgModule({
  declarations: [CarInfoComponent],
  imports: [UserActivityModule, IconTextModule],
  providers: [],
  exports: [CarInfoComponent],
})
export class CarInfoModule {}
