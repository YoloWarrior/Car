import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtualScrollComponent } from './virtual-scroll.component';

@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [CommonModule],
  providers: [],
  exports: [VirtualScrollComponent],
})
export class VirtualScrollModule {}
