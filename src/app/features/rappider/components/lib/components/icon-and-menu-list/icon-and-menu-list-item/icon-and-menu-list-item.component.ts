import { Component, Input, OnInit } from '@angular/core';
import { DropdownMenuComponentConfig } from '../../../utils/dropdown-menu/dropdown-menu.interface';
import { IconComponentConfig } from '../../../utils/icon/icon-component-config.interface';


@Component({
  selector: 'rappider-icon-and-menu-list-item',
  templateUrl: './icon-and-menu-list-item.component.html',
  styleUrls: ['./icon-and-menu-list-item.component.scss']
})
export class RappiderIconAndMenuListItemComponent {

  /**
   * menu item title
   *
   * @type {string}
   * @memberof IconAndMenuListItemComponent
   */
  @Input() title: string;
  /**
   *menu item description
   *
   * @type {string}
   * @memberof IconAndMenuListItemComponent
   */
  @Input() description: string;
  /**
   * menu item icon
   *
   * @type {string}
   * @memberof IconAndMenuListItemComponent
   */
  @Input() icon: IconComponentConfig;
  @Input() dropdownMenu: DropdownMenuComponentConfig;

}
