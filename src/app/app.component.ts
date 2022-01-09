import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { Car } from './core/models/car.model';
import { VirtualScrollComponent } from './shared/components/virtual-scroll/virtual-scroll.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
