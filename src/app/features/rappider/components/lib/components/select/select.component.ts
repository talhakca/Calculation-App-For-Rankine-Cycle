import { Component, OnInit, Output, Input, EventEmitter, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GrouppedOption } from '../../utils/select/groupped-option.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { SelectableOption } from '../../utils/form-utils/selectable-option.type';
import { SelectMode } from '../../utils/select/select-mode.enum';
import { SelectSettings } from '../../utils/select/select-settings.interface';


@Component({
  selector: 'rappider-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderSelectComponent),
      multi: true
    }
  ]
})
export class RappiderSelectComponent implements OnInit, OnChanges, ControlValueAccessor {

  /**
   * options has lower priorty than groupped options
   *
   * @type {SelectableOption[]}
   * @memberof RappiderSelectComponent
   */
  @Input() options: SelectableOption[];
  /**
   * groupped options has higher priorty than options
   *
   * @type {GrouppedOption[]}
   * @memberof RappiderSelectComponent
   */
  @Input() grouppedOptions: GrouppedOption[];
  @Input() settings: SelectSettings;
  @Input() placeholder: string;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() invalidConfigText: string;
  @Input() disabled: boolean;
  @Input() loading = false;
  @Input() buttons: ButtonComponentConfig;
  @Input() dropdownMatchSelectWidth: boolean;
  @Input() dropdownClassName: string;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<any>();
  @Output() searchTextChange = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  DEFAULT_MODE = SelectMode.Single;
  _value: any;

  get value() {
    return this._value;
  }

  set value(value: any | any[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }


  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDefaults();
  }

  initDefaults() {
    if (this.dropdownMatchSelectWidth == null) {
      this.dropdownMatchSelectWidth = false;
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this._value = value;
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

  getInvalidConfigText() {
    return this.invalidConfigText ?? 'Options are missing or not usable.';
  }

  onSearchTextChange(searchText: string) {
    this.searchTextChange.emit(searchText);
  }

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }

}
