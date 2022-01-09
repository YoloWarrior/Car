import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarCardModule } from 'src/app/shared/components/car-card/car-card.module';
import { CarInfoModule } from 'src/app/shared/components/car-info/car-info.module';
import { VirtualScrollModule } from 'src/app/shared/components/virtual-scroll/virtual-scroll.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CarCardModule,
    CarInfoModule,
    VirtualScrollModule,
    CatalogRoutingModule,
  ],
  providers: [],
  exports: [CatalogComponent],
})
export class CatalogModule {}
