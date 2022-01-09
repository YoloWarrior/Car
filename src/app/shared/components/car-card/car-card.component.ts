import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() carInfo: Car;
}
