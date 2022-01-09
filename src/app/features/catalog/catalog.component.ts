import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Car } from 'src/app/core/models/car.model';
import { VirtualScrollComponent } from 'src/app/shared/components/virtual-scroll/virtual-scroll.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements AfterViewInit {
  @ViewChild(VirtualScrollComponent)
  private scrollableView: VirtualScrollComponent;

  selectedItem = 0;

  cars: Car[];
  constructor(private db: AngularFireDatabase) {}

  ngAfterViewInit(): void {
    this.db
      .list('/')
      .valueChanges()
      .subscribe((cars: Car[]) => {
        this.cars = cars;

        setTimeout(() => {
          this.scrollableView.scrollToFirst();
        }, 500);
      });
  }
}
