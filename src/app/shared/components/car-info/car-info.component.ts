import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/core/const/icon.enum';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent {
  @Input() carInfo: Car;

  icons = Icon;
}
