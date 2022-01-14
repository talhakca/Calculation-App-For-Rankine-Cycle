import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownMenuPlacement, IconComponentConfig, DropdownMenuTriggerType, Menu, IconType } from '../../utils';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { PaymentDetailItem } from '../../utils/payment-details/payment-details-item.interface';
@Component({
  selector: 'rappider-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class RappiderPaymentDetailsComponent implements OnInit, OnChanges {

  /* card header */
  @Input() headerTitle: string;
  /* header's content */
  @Input() headerContent: string;
  /* card footer */
  @Input() footerTitle: string;
  /* footer's content */
  @Input() footerContent: string;
  /* card's items */
  @Input() cardItems: PaymentDetailItem[];
  /* dropdown menu items */
  @Input() dropdownMenuItems: DropdownMenuItem[];
  /* dropdown placement */
  @Input() dropdownMenuPlacement: DropdownMenuPlacement;
  /* dropdown button label */
  @Input() dropdownMenuLabel: string;
  /* dropdown button icon */
  @Input() dropdownMenuIcon: IconComponentConfig;
  /* dropdown item trigger type */
  @Input() dropdownMenuTriggerType: DropdownMenuTriggerType;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() routerClick = new EventEmitter<ButtonComponentConfig>();
  @Output() menuItemClick = new EventEmitter<Menu>();
  @Output() dropdownMenuItemClick = new EventEmitter<DropdownMenuItem>();

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.dropdownMenuTriggerType) {
      this.dropdownMenuTriggerType = DropdownMenuTriggerType.Click;
    }
    if (!this.dropdownMenuPlacement) {
      this.dropdownMenuPlacement = DropdownMenuPlacement.BottomCenter;
    }
    if (!this.dropdownMenuIcon) {
      this.dropdownMenuIcon = {
        name: 'fas fa-caret-down',
        type: IconType.FontAwesome
      };
    }

  }

  onDropdownMenuItemClick(value: DropdownMenuItem) {
    this.dropdownMenuItemClick.emit(value);
  }

  onMenuItemClick(menu: Menu) {
    this.menuItemClick.emit(menu);
  }

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }

  onRouterClick(router: ButtonComponentConfig) {
    this.routerClick.emit(router);
  }
}
