import { Component, Input, TemplateRef } from '@angular/core';
import { SpinSize } from '../../utils/spin';
@Component({
  selector: 'rappider-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class RappiderSpinComponent {

  @Input() nzDelay: number;
  @Input() nzIndicator: TemplateRef<void>;
  @Input() nzSize: SpinSize;
  @Input() nzSpinning: boolean;
  @Input() nzSimple: boolean;
  @Input() nzTip: string;

}
