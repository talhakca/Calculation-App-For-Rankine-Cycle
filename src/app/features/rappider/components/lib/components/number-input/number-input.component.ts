import { Component, OnInit, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { toNumber } from 'lodash';

@Component({
  selector: 'rappider-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderNumberInputComponent),
      multi: true
    }
  ]
})
export class RappiderNumberInputComponent implements ControlValueAccessor {

  @Input() step: number | string = 1;
  @Input() max: number;
  @Input() min: number;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<number>();
  @Output() valueChange = new EventEmitter<number>();

  _value: number;

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string | number): void {
    this._value = toNumber(value);
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
}
