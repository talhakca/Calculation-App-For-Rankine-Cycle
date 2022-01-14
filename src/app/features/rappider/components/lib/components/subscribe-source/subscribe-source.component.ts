import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils';
import { InputGroupComponentConfig } from '../../utils/input-group';

@Component({
  selector: 'rappider-subscribe-source',
  templateUrl: './subscribe-source.component.html',
  styleUrls: ['./subscribe-source.component.scss']
})
export class RappiderSubscribeSourceComponent {

  /* heading for subscribe source */
  @Input() heading: HeadingComponentConfig;
  /* content for subscribe source  */
  @Input() content: string;
  /* input group component config */
  @Input() inputGroup: InputGroupComponentConfig;
  /* input value */
  @Input() value: string;

}
