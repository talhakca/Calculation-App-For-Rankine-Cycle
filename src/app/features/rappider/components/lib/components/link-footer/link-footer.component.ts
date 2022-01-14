import { Component, Input } from '@angular/core';
import { LinkFooterItem } from '../../utils/link-footer';
import { TypographyColorType } from '../../utils/link-footer/typography-color-type.enum';
@Component({
  selector: 'rappider-link-footer',
  templateUrl: './link-footer.component.html',
  styleUrls: ['./link-footer.component.scss']
})
export class RappiderLinkFooterComponent {
  /**
   *Displays link footer items
   *
   * @type {LinkFooterItem[]}
   * @memberof RappiderLinkFooterComponent
   */
  @Input() items: LinkFooterItem[];
  /**
   *To change the color of links
   *
   * @type {TypographyColorType}
   * @memberof RappiderLinkFooterComponent
   */
  @Input() color: TypographyColorType;
}
