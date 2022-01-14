import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxList, HeadingComponentConfig } from '../../utils';
import { CheckboxListDirection } from '../../utils/checkbox-list/checkbox-list-direction.enum';
import { MappedCheckboxList } from '../../utils/checkbox-list/mapped-checkbox-list.interface';

@Component({
  selector: 'rappider-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderCheckboxListComponent),
      multi: true
    }
  ]
})
export class RappiderCheckboxListComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() direction = CheckboxListDirection.Column;
  @Input() header: HeadingComponentConfig;
  @Input() options: CheckboxList[];

  @Output() itemSelected = new EventEmitter<string[]>();

  mappedOptions: MappedCheckboxList[];
  _value: string[];

  get value() {
    return this._value;
  }

  set value(value: string[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.itemSelected.emit(this.value);
  }


  ngOnInit(): void {
    this.writeValue(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      this.writeValue(this.value);
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: string[]) {
    this._value = val;
    this.mapOptions();
  }

  mapOptions() {
    this.mappedOptions = this.options?.map(option => {
      if (this.value?.some(valueItem => valueItem === option.value)) {
        return {
          ...option,
          isSelected: true
        };
      } else {
        return {
          ...option,
          isSelected: false
        };
      }
    });
  }

  onValueChange(checkboxItem: any) {
    if (checkboxItem.isSelected) {
      this.value = [
        ...this.value,
        checkboxItem.value
      ];
    } else {
      this.value = this.value?.filter(item => item !== checkboxItem.value);
    }
  }

}
