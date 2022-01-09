import { Component, Input, OnInit } from '@angular/core';
import { UserActivity } from 'src/app/core/models/user-activity.model';

@Component({
  selector: 'user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss'],
})
export class UserActivityComponent {
  @Input() userActivity: UserActivity;
}
