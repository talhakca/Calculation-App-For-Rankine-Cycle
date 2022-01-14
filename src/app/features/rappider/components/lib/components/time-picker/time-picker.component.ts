import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rappider-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderTimePickerComponent),
      multi: true
    }
  ]
})
export class RappiderTimePickerComponent implements ControlValueAccessor {

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<Date>();
  @Output() valueChange = new EventEmitter<Date>();

  _value: Date;

  get value() {
    return this._value;
  }

  set value(value: Date) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value): void {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTimeChange(value: Date) {
    this.blur.emit(value);
  }

}
