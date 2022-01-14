import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  ActionResponse,
  CrudFormItemMenuItem,
  DEFAULT_FORM_CARD_CONFIG,
  EditFormComponentConfig,
  HeadingComponentConfig
} from '../../utils';


@Component({
  selector: 'rappider-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class RappiderFormCardComponent implements OnInit, OnChanges {
  /**
   *Card's title
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderFormCardComponent
   */
  @Input() heading: HeadingComponentConfig;
  /**
   *Additional content
   *
   * @type {string}
   * @memberof RappiderFormCardComponent
   */
  @Input() additionalContent: string;
  /**
   *Card's footer content
   *
   * @type {string}
   * @memberof RappiderFormCardComponent
   */
  @Input() footerContent: string;
  /**
   *Configuration of this form component
   *
   * @type {EditFormComponentConfig}
   * @memberof RappiderFormCardComponent
   */
  @Input() editFormComponentConfig: EditFormComponentConfig;

  @Output() formSubmit = new EventEmitter<any>();
  @Output() formValueChange = new EventEmitter<any>();
  @Output() fieldValueChange = new EventEmitter<any>();
  @Output() validityChange = new EventEmitter<boolean>();
  @Output() buttonClick = new EventEmitter<ActionResponse>();
  @Output() labelMenuItemClick = new EventEmitter<CrudFormItemMenuItem>();

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.editFormComponentConfig?.config) {
      this.editFormComponentConfig = {
        ...this.editFormComponentConfig,
        config: DEFAULT_FORM_CARD_CONFIG
      };
    }
  }
  onFormSubmit(form: any) {
    this.formSubmit.emit(form);
  }

  onFormValueChange(formValue: any) {
    this.formValueChange.emit(formValue);
  }

  onFieldValueChange(fieldValue: any) {
    this.fieldValueChange.emit(fieldValue);
  }

  onValidityChange(validity: boolean) {
    this.validityChange.emit(validity);
  }

  onButtonClick(button: ActionResponse) {
    this.buttonClick.emit(button);
  }

  onLabelMenuItemClick(menuItem: CrudFormItemMenuItem) {
    this.labelMenuItemClick.emit(menuItem);
  }
}

