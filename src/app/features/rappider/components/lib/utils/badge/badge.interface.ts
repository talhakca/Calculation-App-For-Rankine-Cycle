import { BadgeStatus } from './badge-status.enum';

export interface Badge {
  status?: BadgeStatus;
  title: string;
  text?: string;
}
