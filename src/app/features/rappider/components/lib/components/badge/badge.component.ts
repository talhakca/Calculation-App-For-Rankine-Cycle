import { Component, Input } from '@angular/core';
import { BadgeStatus } from '../../utils/badge/badge-status.enum';

@Component({
  selector: 'rappider-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class RappiderBadgeComponent {

  @Input() count: number;
  @Input() color: string;
  @Input() dot: boolean;
  @Input() showDot: boolean;
  @Input() overflowCount: number;
  @Input() showZero: boolean;
  @Input() status: BadgeStatus;
  @Input() title: string;
  @Input() text: string;
  @Input() offset: [number, number];
  @Input() link: string;

}
