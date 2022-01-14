import { Component, forwardRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SwitchSize } from '../../utils/switch/switch-size.enum';


@Component({
  selector: 'rappider-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderSwitchComponent),
      multi: true
    }
  ]
})
export class RappiderSwitchComponent implements ControlValueAccessor {

  /* disable state */
  @Input() disabled: boolean;
  /* loading state */
  @Input() loading: boolean;
  /* size options  small or default */
  @Input() size: SwitchSize = SwitchSize.Default;

  @Output() valueChange = new EventEmitter<boolean>();

  _value: boolean;

  get value() {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: boolean) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
