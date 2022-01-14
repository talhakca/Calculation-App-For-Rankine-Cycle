import { Component, forwardRef, OnInit, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NotificationService } from '../../services/notification/notification.service';
import { InputSize } from '../../utils/common-utils/input-size.enum';
import { CrudFormConfigInputChangeReaction } from '../../utils/edit-form/crud-form-config-input-change-reaction.enum';
import { CrudFormConfigSubmitButton } from '../../utils/edit-form/crud-form-config-submit-button.interface';
import { CrudFormConfigValidators } from '../../utils/edit-form/crud-form-config-validators.interface';
import { CrudFormConfig } from '../../utils/edit-form/crud-form-config.interface';
import { FormLayout } from '../../utils/edit-form/form-layout.enum';
import { JSON_CODEMIRROR_SETTINGS } from '../../utils/json-array/json-array-codemirror.settings';
import { SINGLE_NOT_SEARCHABLE_SELECT_SETTINGS } from '../../utils/select/single-not-searchable-select.settings';

@Component({
  selector: 'rappider-edit-form-config-input',
  templateUrl: './edit-form-config-input.component.html',
  styleUrls: ['./edit-form-config-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderEditFormConfigInputComponent),
      multi: true
    }
  ]
})
export class RappiderEditFormConfigInputComponent implements OnInit, ControlValueAccessor {

  @Output() blur = new EventEmitter<CrudFormConfig>();

  /* settings for codemirror component */
  JSON_CODEMIRROR_SETTINGS = JSON_CODEMIRROR_SETTINGS;
  /**
   * local value
   *
   * @type {CrudFormConfig}
   * @memberof EditFormConfigInputComponent
   */
  _value: CrudFormConfig;

  /* local variables */
  /* form layout data for CrudFormConfig*/
  formLayout: FormLayout;
  /* input change reaction data for CrudFormConfig */
  inputChangeReactions = [];
  /* items data for CrudFormConfig */
  items: any[];
  /* item settings data for CrudFormConfig */
  itemSettings: any;
  /* validators data for CrudFormConfig */
  validators: CrudFormConfigValidators[] = [];
  /* submit button data for CrudFormConfig */
  submitButton: CrudFormConfigSubmitButton;

  /* select component settings for form layout*/
  formLayoutOptions = [];
  /* select component settings for input sizes */
  inputSizes = [];
  /* select component settings for submitButton */
  inputChangeReaction: CrudFormConfigInputChangeReaction;

  /* settings for select component */
  SINGLE_SELECT_SETTINGS = SINGLE_NOT_SEARCHABLE_SELECT_SETTINGS;

  /* modal visible states */
  editSubmitButtonSettingsModalVisible = false;
  editFormConfigInputVisible = false;
  itemSettingsModalVisible = false;

  /* default values flag */
  isDefaultValuesAdded = false;

  /* preview field names for json array component */
  itemsPreviewFieldNames = ['title', 'fieldName', 'type'];
  validatorsPreviewFieldNames = ['name', 'validator'];

  get value() {
    return this._value;
  }

  set value(value: CrudFormConfig) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getEditFormLayoutOptions();
    this.getInputChangeReactions();
    this.getInputSizes();
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value): void {
    this._value = value || {};
    this.getFieldValues();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleCancel() {
    this.editSubmitButtonSettingsModalVisible = false;
  }

  /**
   * gets the form layout options
   *
   * @memberof EditFormConfigInputComponent
   */
  getEditFormLayoutOptions() {
    this.formLayoutOptions = Object.values(FormLayout).map(value => ({
        key: value,
        value: value
      }));
  }

  /**
   * gets the input change reactions
   *
   * @memberof EditFormConfigInputComponent
   */
  getInputChangeReactions() {
    this.inputChangeReactions = Object.values(CrudFormConfigInputChangeReaction).map(value => ({
        key: value,
        value: value
      }));
  }

  getInputSizes() {
    this.inputSizes = Object.entries(InputSize).map(([key, value]) => ({
        key: key,
        value: value
      }));
  }

  /**
   * opens edit submit button settings modal
   *
   * @memberof EditFormConfigInputComponent
   */
  openEditSubmitButtonSettingsModal() {
    this.editSubmitButtonSettingsModalVisible = true;
  }

  /**
   * takes the submit button value and assign it to value.submitButton
   *
   * @memberof EditFormConfigInputComponent
   */
  onSubmitButtonSettingsChange() {
    this.value.submitButton = this.submitButton;
    this.editSubmitButtonSettingsModalVisible = false;
  }

  getSubmitButtonData() {
    const defaultSubmitButtonData = <CrudFormConfigSubmitButton>{
      size: 'default',
      visible: true,
      text: 'Submit'
    };
    this.submitButton = this.value?.submitButton ? this.value.submitButton : defaultSubmitButtonData;
  }

  getItemsData() {
    this.items = this.value?.items || [];
  }

  getFormLayoutData() {
    this.formLayout = this.value?.formLayout ? this.value.formLayout : FormLayout.Vertical;
  }

  getInputChangeReactionData() {
    this.inputChangeReaction = this.value?.inputChangeReaction ? this.value.inputChangeReaction : CrudFormConfigInputChangeReaction.Default;
  }

  getItemSettingsData() {
    this.itemSettings = this.value?.itemSettings ? JSON.stringify(this.value.itemSettings) : '';
  }

  onInputChangeReactionChange() {
    this.value.inputChangeReaction = this.inputChangeReaction;
  }

  onFormLayoutChange(value: FormLayout) {
    this.value.formLayout = value;
  }

  /**
   * gets the data and assign them to local variables.
   *
   * @memberof EditFormConfigInputComponent
   */
  getFieldValues() {
    this.getEditFormLayoutOptions();
    this.getFormLayoutData();
    this.getInputChangeReactionData();
    this.getSubmitButtonData();
    this.getItemsData();
    this.getItemSettingsData();
    this.isDefaultValuesAdded = true;
  }

  onEditFormButtonClick() {
    this.editFormConfigInputVisible = true;
  }

  hideEditFormModal() {
    this.editFormConfigInputVisible = false;
  }

  onEditFormConfigSubmit() {
    this.value = { ...this.value };
    this.blur.emit(this.value);
    this.editFormConfigInputVisible = false;
  }

  onItemsChange() {
    this.value.items = this.items;
  }

  onValidatorsChange() {
    this.value.validators = this.validators;
  }

  onItemSettingsChange() {
    try {
      this.value.itemSettings = JSON.parse(this.itemSettings);
      this.itemSettingsModalVisible = false;
    } catch (error) {
      this.notificationService.createNotification('error', 'SHARED.ERROR', 'CRUD_VIEW_MODULE.JSON_ARRAY_COMPONENT.WRONG_JSON_FORMAT');
    }
  }

  openItemSettingsModal() {
    this.itemSettingsModalVisible = true;
  }

  closeItemSettingsModal() {
    this.itemSettingsModalVisible = false;
  }
}
