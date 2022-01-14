import { Component, OnInit, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { CodeMirrorSettings } from '../../utils';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'rappider-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderCodemirrorComponent),
      multi: true
    }
  ]
})
export class RappiderCodemirrorComponent implements ControlValueAccessor {

  @Input() settings: CodeMirrorSettings;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
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

  onFocusChange(focus: boolean) {
    if (!focus) {
      this.blur.emit();
    }
  }

}
