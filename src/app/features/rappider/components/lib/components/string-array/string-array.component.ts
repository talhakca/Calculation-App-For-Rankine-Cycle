import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RowFormColumn } from '../../utils/row-form/row-form-column.interface';

@Component({
  selector: 'rappider-string-array',
  templateUrl: './string-array.component.html',
  styleUrls: ['./string-array.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderStringArrayComponent),
      multi: true
    }
  ]
})
export class RappiderStringArrayComponent implements ControlValueAccessor {

  @Input() hasInitialEmptyRow: boolean;

  @Output() blur = new EventEmitter<string[]>();

  CONFIG_COLUMNS: RowFormColumn[] = [
    {
      fieldName: 'value'
    }
  ];

  mappedValue: any;
  _value: any;

  get value() {
    return this._value;
  }

  set value(value: any[]) {
    this._value = value?.map(item => item.value);
    this.onChange(this._value);
    this.onTouched();
  }


  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string[]) {
    if (value) {
      this.mappedValue = value.map(item => ({
        value: item
      }));
    } else {
      this.mappedValue = [];
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onValueChange(value: any) {
    this.value = value;
  }

  onBlur() {
    this.blur.emit(this.value);
  }

}
