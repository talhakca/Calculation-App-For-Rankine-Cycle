import { Component, OnInit, Input } from '@angular/core';
import { DividerOrientation } from '../../utils/divider/divider-orientation.enum';
import { DividerType } from '../../utils/divider/divider-type.enum';

@Component({
  selector: 'rappider-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class RappiderDividerComponent {

  @Input() dashed: boolean;
  @Input() type: DividerType;
  @Input() text: string;
  @Input() textPlacement: DividerOrientation;

}
