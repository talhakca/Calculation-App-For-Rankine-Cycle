import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponentConfig, IconComponentConfig } from '../../utils';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu/dropdown-menu.interface';


@Component({
  selector: 'rappider-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class RappiderTitleBarComponent {

  @Input() mainTitle: string;
  @Input() options: BreadcrumbOption[];
  @Input() cssStyle: any;
  @Input() dropdownMenu: DropdownMenuComponentConfig;
  @Input() actionIcon: IconComponentConfig;
  @Input() actionButtons: ButtonComponentConfig[];

  @Output() optionClick = new EventEmitter<BreadcrumbOption>();
  @Output() menuItemClick = new EventEmitter<DropdownMenuItem>();
  @Output() actionIconClick = new EventEmitter();
  @Output() actionButtonClick = new EventEmitter<ButtonComponentConfig>();


  onOptionClick(option: BreadcrumbOption) {
    this.optionClick.emit(option);
  }

  onMenuItemClick(menu: DropdownMenuItem) {
    this.menuItemClick.emit(menu);
  }

  onActionIconClick() {
    this.actionIconClick.emit();
  }

  onClickActionButton(button: ButtonComponentConfig) {
    this.actionButtonClick.emit(button);
  }

}
