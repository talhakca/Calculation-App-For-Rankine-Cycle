import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectableOption } from '../../utils';

@Component({
  selector: 'rappider-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRadioComponent),
      multi: true
    }
  ]
})
export class RappiderRadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: SelectableOption[];
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() invalidConfigText: string;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;
  isValid: boolean;

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
    this.checkValidity();
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(value: string) {
    this.blur.emit(value);
  }

  checkValidity() {
    this.isValid = Array.isArray(this.options);
  }

  setInvalidConfigText() {
    return this.invalidConfigText || 'COMPONENT_LIBRARY_MODULE.INPUTS_MODULE.INVALID_CONFIG';
  }
}
