import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';

@Component({
  selector: 'rappider-card-twelve',
  templateUrl: './card-twelve.component.html',
  styleUrls: ['./card-twelve.component.scss']
})
export class RappiderCardTwelveComponent {

  /* icon informations */
  @Input() icon: IconComponentConfig;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* for the additional texts */
  @Input() content: string;

}
