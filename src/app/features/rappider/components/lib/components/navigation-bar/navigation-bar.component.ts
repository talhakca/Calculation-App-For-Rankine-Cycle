import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { MenuMode } from '../../utils/menu/menu-mode.enum';
import { Menu } from '../../utils/menu/menu.interface';
import { MenuComponentConfig } from '../../utils/menu/menu-component-config.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu/dropdown-menu.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { InputGroupComponentConfig } from '../../utils/input-group/input-group-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { CartPreviewComponentConfig } from '../../utils/cart-preview/cart-preview-component-config.interface';
import { ButtonWrapper, DropdownMenuWrapper } from '../../utils';


@Component({
  selector: 'rappider-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class RappiderNavigationBarComponent implements OnInit, OnChanges {

  /**
   * Menu config of the navigation bar
   *
   * @type {IMenuComponent}
   * @memberof NavigationBarComponent
   */
  @Input() menu: MenuComponentConfig;
  /**
   *  Menu visibility
   *
   * @type {boolean}
   * @memberof RappiderNavigationBarComponent
   */
  @Input() isMenuVisible: boolean;
  /**
   * Brand text or logo router
   *
   * @type {string}
   * @memberof NavigationBarComponent
   */
  @Input() brandRouteUrl: string;
  /**
   * Brand text for logo
   *
   * @type {string}
   * @memberof NavigationBarComponent
   */
  @Input() brandText: string;
  /**
   * Brand image for logo
   *
   * @type {Image}
   * @memberof NavigationBarComponent
   */
  @Input() brandImage: ImageComponentConfig;
  /**
   * Brand visibility
   *
   * @type {boolean}
   * @memberof RappiderNavigationBarComponent
   */
  @Input() isBrandVisible: boolean;
  /**
   * Additional buttons for navigation bar
   *
   * @type {ButtonWrapper[]}
   * @memberof NavigationBarComponent
   */
  @Input() buttons: ButtonWrapper[];
  /**
   * Additional dropdowns for navigation bar
   *
   * @type {DropdownMenuWrapper[]}
   * @memberof NavigationBarComponent
   */
  @Input() dropdowns: DropdownMenuWrapper[];
  /**
   * Toggler icon for collapsed navigation bar
   *
   * @type {Icon}
   * @memberof NavigationBarComponent
   */
  @Input() togglerIcon: IconComponentConfig;
  /**
   * is navigation bar collapsed
   *
   * @type {boolean}
   * @memberof NavigationBarComponent
   */
  @Input() isCollapsed: boolean;
  /**
   * When click toggler button show dropdown menu or be emit
   *
   * @type {boolean}
   * @memberof NavigationBarComponent
   */
  @Input() isNavbarDropdownMenuUsed: boolean;
  /**
   * Search bar configs
   *
   * @type {InputGroup}
   * @memberof NavigationBarComponent
   */
  @Input() searchArea: InputGroupComponentConfig;
  /**
 * Search area visibility
 *
 * @type {boolean}
 * @memberof NavigationBarComponent
 */
  @Input() isSearchable: boolean;
  /**
   * Cart config
   *
   * @type {CartPreviewComponentConfig}
   * @memberof RappiderNavigationBarComponent
   */
  @Input() cart: CartPreviewComponentConfig;
  /**
   * Cart visiblity state
   *
   * @type {boolean}
   * @memberof RappiderNavigationBarComponent
   */
  @Input() isCartVisible: boolean;

  @Output() togglerClick = new EventEmitter();
  @Output() menuItemClick = new EventEmitter<Menu>();
  @Output() dropdownMenuItemClick = new EventEmitter<DropdownMenuItem>();
  @Output() additionalButtonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() searchButtonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() cartDropdownButtonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() cartButtonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() cartItemButtonClick = new EventEmitter<ButtonComponentConfig>();

  responsiveDropdownMenu = false;


  ngOnInit(): void {
    this.initDefault();
  }

  ngOnChanges() {
    this.initDefault();
  }

  initDefault() {
    if (this.isCollapsed == null) {
      this.isCollapsed = false;
    }
    if (this.isSearchable == null) {
      this.isSearchable = false;
    }
    if (this.isBrandVisible == null) {
      this.isBrandVisible = false;
    }
    if (this.isMenuVisible == null) {
      this.isMenuVisible = false;
    }
    if (this.isCartVisible == null) {
      this.isCartVisible = false;
    }
    if (this.isNavbarDropdownMenuUsed == null) {
      this.isNavbarDropdownMenuUsed = true;
    }
    if (!this.togglerIcon) {
      this.togglerIcon = {
        name: 'far fa-bars'
      };
    }
  }

  onClickToggler() {
    if (this.isNavbarDropdownMenuUsed) {
      this.responsiveDropdownMenu = !this.responsiveDropdownMenu;
      this.menu.config.mode = MenuMode.Vertical;
    } else {
      this.togglerClick.emit();
    }
  }

  onMenuItemClick(menu: Menu) {
    this.menuItemClick.emit(menu);
  }

  onAdditionalButtonClick(button: ButtonComponentConfig) {
    this.additionalButtonClick.emit(button);
  }

  onDropdownMenuItemClick(item: DropdownMenuItem) {
    this.dropdownMenuItemClick.emit(item);
  }

  onSearchValueChange(value: string) {
    this.searchValueChange.emit(value);
  }

  onSearchButtonClick(button: ButtonComponentConfig) {
    this.searchButtonClick.emit(button);
  }

  onCartDropdownButtonClick(button: ButtonComponentConfig) {
    this.cartDropdownButtonClick.emit(button);
  }

  onCartButtonClick(button: ButtonComponentConfig) {
    this.cartButtonClick.emit(button);
  }

  onCartItemButtonClick(button: ButtonComponentConfig) {
    this.cartItemButtonClick.emit(button);

  }

}
