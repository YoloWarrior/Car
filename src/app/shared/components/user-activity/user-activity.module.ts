import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserActivityComponent } from './user-activity.component';

@NgModule({
  declarations: [UserActivityComponent],
  imports: [CommonModule],
  providers: [],
  exports: [UserActivityComponent],
})
export class UserActivityModule {}
