import { Component, Input } from '@angular/core';
import { TypographyColorType } from '../../utils/link-footer/typography-color-type.enum';

@Component({
  selector: 'rappider-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class RappiderTextComponent {
  /**
   *Text content
   *
   * @type {string}
   * @memberof RappiderTextComponent
   */
  @Input() content: string;
  /**
   *Text color
   *
   * @type {TypographyColorType}
   * @memberof RappiderTextComponent
   */
  @Input() color: TypographyColorType;
}
