import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CalendarMode } from '../../utils/calendar/calendar-mode.enum';

@Component({
  selector: 'rappider-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderCalendarComponent),
      multi: true
    }
  ]
})

export class RappiderCalendarComponent implements ControlValueAccessor {


  @Input() mode: CalendarMode;
  @Input() isFullscreen: boolean;


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
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(value: Date) {
    this.blur.emit(value);
  }

}

