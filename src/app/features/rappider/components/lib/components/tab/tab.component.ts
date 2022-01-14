import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';

@Component({
  selector: 'rappider-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class RappiderTabComponent {

  @Input() title: HeadingComponentConfig;
  @Input() content: string;
  @Input() disabled?: boolean;
  @Input() icon: IconComponentConfig;

}
