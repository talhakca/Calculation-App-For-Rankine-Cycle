import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rappider-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderTextareaComponent)
    }
  ]
})
export class RappiderTextareaComponent implements ControlValueAccessor {

  @Input() rows: number;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() placeholder: string;
  @Input() autosize: boolean;

  @Output() valueChange = new EventEmitter<string>();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<string>();

  _value: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string) {
    this._value = value;
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

}
