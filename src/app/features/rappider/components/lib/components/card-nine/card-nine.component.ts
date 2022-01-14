import { Component, Input } from '@angular/core';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';

@Component({
  selector: 'rappider-card-nine',
  templateUrl: './card-nine.component.html',
  styleUrls: ['./card-nine.component.scss']
})
export class RappiderCardNineComponent {

  /* content */
  @Input() content: string;
  /* description */
  @Input() description: string;
  /* icon */
  @Input() icon: IconComponentConfig;
  /* card's background color */
  @Input() backgroundColor: string;

}
