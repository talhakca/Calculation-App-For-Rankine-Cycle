import { Component, Input } from '@angular/core';
import { CollapseIconPosition } from '../../utils/collapse/collapse-icon-position.enum';
import { Panel } from '../../utils/panel/panel.interface';

@Component({
  selector: 'rappider-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class RappiderAccordionComponent {

  @Input() panels: Panel[];
  @Input() bordered: boolean;
  @Input() collapseIconPosition: CollapseIconPosition;

}
