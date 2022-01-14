/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { DropdownMenuPlacement } from '../../utils/dropdown-menu/dropdown-menu-placement.enum';
import { DropdownMenuTriggerType } from '../../utils/dropdown-menu/dropdown-menu-trigger-type.enum';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { IconType } from '../../utils/icon/icon-type.enum';
import { MenuActionBehavior } from '../../utils/menu/menu-action-behavior.enum';
import { SelectMode } from '../../utils/select/select-mode.enum';

@Component({
  selector: 'rappider-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDropdownMenuComponent),
      multi: true
    }
  ]
})
export class RappiderDropdownMenuComponent implements OnInit, OnChanges, ControlValueAccessor {
  /* dropdown menu items */
  @Input() items: DropdownMenuItem[];
  /* dropdown placement */
  @Input() placement: DropdownMenuPlacement;
  /* dropdown button label */
  @Input() label: string;
  /* dropdown button icon */
  @Input() icon: IconComponentConfig;
  /* dropdown item trigger type */
  @Input() triggerType: DropdownMenuTriggerType;

  @Output() menuItemClick = new EventEmitter<DropdownMenuItem>();
  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<any>();

  constructor(
    private router: Router
  ) { }

  DEFAULT_MODE = SelectMode.Single;
  _value: any;

  get value() {
    return this._value;
  }

  set value(value: any | any[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDefaults();
  }


  initDefaults() {
    if (!this.triggerType) {
      this.triggerType = DropdownMenuTriggerType.Click;
    }
    if (!this.placement) {
      this.placement = DropdownMenuPlacement.BottomCenter;
    }
    if (!this.icon) {
      this.icon = {
        name: 'fas fa-caret-down',
        type: IconType.FontAwesome
      };
    }

  }
  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit(this.value);
  }

  onMenuItemClick(event: Event, menu: DropdownMenuItem) {
    event.stopPropagation();
    switch (menu.actionBehavior) {
      case MenuActionBehavior.Router:
        if (menu.redirectUrl) {
          this.router.navigateByUrl(menu.redirectUrl);
        }
        break;
      case MenuActionBehavior.Emit:
      default:
        this.menuItemClick.emit(menu);
        break;
    }
    this.value = menu.key;
  }

}
