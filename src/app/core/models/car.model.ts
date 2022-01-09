import { UserActivity } from './user-activity.model';

export interface Car {
  icon: string;
  title: string;
  fuel: string;
  image: string;
  mileage?: number;
  country?: string;
  transmission?: string;
  userActivity?: UserActivity;
}
