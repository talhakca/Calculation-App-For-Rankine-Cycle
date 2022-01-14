import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { isDate } from 'moment';


@Component({
  selector: 'rappider-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDatePickerComponent),
      multi: true
    }
  ]
})
export class RappiderDatePickerComponent implements ControlValueAccessor {

  @Input() minSelectableDate: Date;
  @Input() maxSelectableDate: Date;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;

  @Output() blur = new EventEmitter<Date>();
  @Output() valueChange = new EventEmitter<Date>();

  _value: Date;

  get value() {
    return this._value;
  }

  set value(value: Date | string) {
    this.setDateValue(value);
    this.onChange(this._value);
    this.onTouched();
    this.valueChange.emit(this._value);
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value): void {
    this.setDateValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDateValue(value: Date | string) {
    if (value) {
      const localeDateValue = new Date(value);
      if (isDate(localeDateValue) && !isNaN(localeDateValue.getTime())) {
        this._value = localeDateValue;
      } else {
        this._value = null;
      }
    } else {
      this._value = null;
    }
  }

  /** Checks if there is boundry for date picking,if so disables the unpickable dates */
  disabledDate = (current: Date): boolean => {
    const minCondition = differenceInCalendarDays(this.minSelectableDate, current) > 0;
    const maxCondition = differenceInCalendarDays(current, this.maxSelectableDate) > 0;

    /* Checks if there is both min and max condition */
    if (this.minSelectableDate && this.maxSelectableDate) {
      return !(!minCondition && !maxCondition);
    } else if (this.minSelectableDate) { /* Checks for min condition */
      return minCondition;
    } else if (this.maxSelectableDate) { /* Checks for max condition */
      return maxCondition;
    }
  };

  onDateTimeChange(value: Date) {
    this.blur.emit(value);
  }

}

