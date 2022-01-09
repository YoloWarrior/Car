import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserActivityModule } from '../user-activity/user-activity.module';
import { CarCardComponent } from './car-card.component';

@NgModule({
  declarations: [CarCardComponent],
  imports: [UserActivityModule],
  providers: [],
  exports: [CarCardComponent],
})
export class CarCardModule {}
