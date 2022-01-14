import { Component, Input } from '@angular/core';
import { ButtonColorType } from '../../utils/button/button-color-type.enum';
import { ButtonShape } from '../../utils/button/button-shape.enum';
import { ButtonSize } from '../../utils/button/button-size.enum';
import { ButtonType } from '../../utils/button/button-type.enum';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';

@Component({
  selector: 'rappider-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class RappiderButtonComponent {

  @Input() key: string;
  /* can be set to primary dashed link */
  @Input() type: ButtonType;
  /* 	can be set to circle round */
  @Input() shape: ButtonShape;
  /* button text */
  @Input() text: string;
  /* size */
  @Input() size: ButtonSize;
  /* make background transparent and invert text and border colors */
  @Input() transparent: boolean;
  /* set the loading status of button */
  @Input() loading: boolean;
  /* option to fit button width to its parent width */
  @Input() block: boolean;
  /* set the disabled status of button */
  @Input() disabled: boolean;
  /* color type */
  @Input() colorType: ButtonColorType;
  /* button icon interface */
  @Input() icon: IconComponentConfig;
  /* set the danger status of button */
  @Input() danger: boolean;

}
