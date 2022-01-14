import { KeyValue } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { toInteger } from 'lodash';
import { DimensionType } from '../../utils/dimension-select/dimension-type.enum';

@Component({
  selector: 'rappider-dimension-select',
  templateUrl: './dimension-select.component.html',
  styleUrls: ['./dimension-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDimensionSelectComponent),
      multi: true
    }
  ]
})
export class RappiderDimensionSelectComponent implements OnInit, ControlValueAccessor {

  @Input() height: string;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;
  /* local number value */
  number: number;
  /* local type value */
  type: string = DimensionType.PX;

  selectOptions: KeyValue<string, string>[] = [];

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  ngOnInit(): void {
    this.getSelectOptions();
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string) {
    this.getNumberAndType(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit(this.value);
  }

  onNumberChange() {
    this.value = this.getMergedValue();
  }

  onTypeChange() {
    this.value = this.getMergedValue();
    this.blur.emit(this.value);
  }

  getMergedValue() {
    return `${this.number || 0}${this.type || ''}`;
  }

  getNumberAndType(value: string) {
    if (value) {
      this.number = toInteger(value.match(/\d+/g)?.[0]);
      this.type = value.match(/[a-zA-Z%]+/g)?.[0].toString();
    }
  }

  getSelectOptions() {
    this.selectOptions = Object.values(DimensionType).map(element => ({
      key: element,
      value: element
    }));
  }

}
