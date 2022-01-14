import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { set, orderBy, groupBy } from 'lodash';
import { CrudFormItemMenuItem } from '../../utils/edit-form/crud-form-item-menu-item.interface';
import { ComponentSize } from '../../utils/common-utils/component-size.enum';
import { CrudFormObjectItem } from '../../utils/edit-form/crud-form-object-item.interface';
import { CrudFormConfig } from '../../utils/edit-form/crud-form-config.interface';
import { ActionResponse } from '../../utils/action-utils/action-response.interface';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';
import { FormLayout } from '../../utils/edit-form/form-layout.enum';
import { CrudViewFormItemType } from '../../utils/edit-form/crud-view-form-item-type.enum';
import { ActionBehavior } from '../../utils/action-utils/action-behavior.enum';
import { ActionView } from '../../utils/action-utils/action-view.enum';
import { FormService } from '../../services/form/form.service';
import { CrudFormConfigInputChangeReaction } from '../../utils/edit-form/crud-form-config-input-change-reaction.enum';
import { CrudFormItem } from '../../utils/edit-form/crud-form-item.interface';
import { MustMatch } from '../../utils/validator-utils/must-match.validator';
import { CrudFormButtonItem } from '../../utils/edit-form/crud-form-button-item.interface';
import { CrudFormValueEmitMode } from '../../utils/edit-form/crud-form-value-emit-mode.enum';


@Component({
  selector: 'rappider-crud-view-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class RappiderEditFormComponent implements OnInit, OnChanges {

  /* configuration of this component */
  @Input() config: CrudFormConfig;
  /* data for default input values */
  @Input() data: any;
  /* auto submit&dirty value for form */
  @Input() submitted: boolean;

  @Output() formSubmit = new EventEmitter<any>();
  @Output() formValueChange = new EventEmitter<any>();
  @Output() fieldValueChange = new EventEmitter<any>();
  @Output() validityChange = new EventEmitter<boolean>();
  @Output() buttonClick = new EventEmitter<ActionResponse>();
  @Output() labelMenuItemClick = new EventEmitter<CrudFormItemMenuItem>();

  /* form variables */
  dataForm: FormGroup;
  dataFormFieldErrors: { [key: string]: string[] } = {};
  isDataFormFieldErrorsChecked = false;

  loading = true;

  objectFieldEditModal: {
    visible: boolean;
    breadcrumbOptions: BreadcrumbOption[];
    activeBreadcrumbOption: BreadcrumbOption;
  } = {
      visible: false,
      breadcrumbOptions: [],
      activeBreadcrumbOption: null
    };

  /* DEFAULT DEFINITIONS */
  FULL_COMPONENT_SIZE: ComponentSize = { xs: 24 };
  DEFAULT_LABEL_COMPONENT_SIZE: ComponentSize = { xs: 24, sm: 6 };
  DEFAULT_INPUT_COMPONENT_SIZE: ComponentSize = { xs: 24, sm: 18, md: 10 };
  DEFAULT_SUBMIT_BUTTON_TEXT = 'SHARED.SAVE';
  DEFAULT_FORM_LAYOUT = FormLayout.Horizontal;

  FormLayout = FormLayout;
  ComponentTypes = CrudViewFormItemType;
  ActionBehavior = ActionBehavior;
  ActionView = ActionView;

  /* Form items groupped by sections */
  grouppedItems;
  /* names of the sections */
  itemSections: string[];


  /**
   * sets true after 500ms
   * used to render the codemirror component properly as codemirror gutter doesn't initialized as it should be.
   *
   * @memberof RappiderEditFormComponent
   */
  timeoutCompleted = false;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit() {
    this.generateForm();
    this.initTimeout();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config?.currentValue) {
      /* generate form */
      this.generateForm();
      /* set input change reaction if not exist */
      if (!this.config.inputChangeReaction) {
        this.config.inputChangeReaction = CrudFormConfigInputChangeReaction.Default;
      }
    }
    if (changes.data) {
      if (this.data && this.dataForm) {
        this.dataForm.patchValue(this.data);
        this.emitValidity();
      }
    }
    if (changes.submitted) {
      if (this.submitted) {
        this.checkAllDataFormFieldErrors();
        this.emitValidity();
      }
    }
  }

  initTimeout() {
    setTimeout(() => this.timeoutCompleted = true, 500);
  }

  generateForm() {
    this.loading = true;
    /* set field order by their indexes */
    if (this.config?.items) {
      this.config.items = orderBy(this.config?.items, 'index', 'asc');
      this.grouppedItems = groupBy(this.config?.items, 'section');
      this.itemSections = Object.keys(this.grouppedItems);
    }

    /* set main form */
    this.dataForm = this.createFormGroupByCrudFormItems(this.config?.items, this.dataForm?.value);
    /* set dataForm validators, TODO: set validators for nested form groups too */
    if (this.config?.validators?.length) {
      this.dataForm.setValidators(this.generateFormGroupValidators());
    }
    this.loading = false;
  }

  /* Display section header if it has a section title and it is not undefined */
  displaySectionHeader(itemSection) {
    return itemSection && itemSection !== 'undefined';
  }

  /**
   * returns specified form field's value
   *
   * @param {string} fieldName
   * @returns
   * @memberof EditFormComponent
   */
  getFormFieldValueByFieldName(fieldName: string) {
    return this.dataForm.get(fieldName)?.value;
  }

  createFormGroupByCrudFormItems(crudFormItems: CrudFormItem[], data = null) {
    if (crudFormItems?.length) {
      const formData = {};
      crudFormItems.forEach(item => {
        if (!item['items']?.length) {
          // #region CREATE FORM FIELD
          if (item.fieldName) {
            /* get initial value */
            const value = data && data[item.fieldName];
            /* get form field validators */
            const validators = item.validators?.filter(validator => validator.type).map(validator => validator.type) || [];
            /* set form field */
            formData[item.fieldName] = [value, validators];
          }
          // #endregion
        } else {
          // #region CREATE FORM GROUP
          /* get nested data */
          const nestedData = data && data[item.fieldName];
          /* get form group */
          formData[item.fieldName] = this.createFormGroupByCrudFormItems(item['items'], nestedData);
          // #endregion
        }
      });
      return this.formBuilder.group(formData);
    }
  }

  /* TODO: move validator functions to validator service */
  generateFormGroupValidators() {
    const validators = [];
    this.config.validators.forEach(validator => {
      switch (validator.validatorKey) {
        case 'mustMatch':
          if (validator.params && validator.params.field1 && validator.params.field2) {
            validators.push(MustMatch(validator.params.field1, validator.params.field2));
          }
          break;
        default:
          break;
      }
    });
    return validators;
  }

  resetForm() {
    this.dataForm.reset();
    this.clearAllDataFormFieldErrors();
  }

  getFieldErrorMessages(form: FormGroup, item: CrudFormItem) {
    let errors = [];
    const errorKeys = this.formService.getActiveErrorKeys(form, item.fieldName);
    if (errorKeys.length) {
      errors = item.validators
        .filter(validator => errorKeys.includes(validator.errorKey))
        .map(validator => validator.errorMessage);
    }
    return errors;
  }

  checkDataFormFieldErrorsByFormItem(item: CrudFormItem) {
    if (item.fieldName) {
      const errors = this.getFieldErrorMessages(this.dataForm, item);
      if (errors?.length) {
        this.dataFormFieldErrors[item.fieldName] = errors;
      } else {
        delete this.dataFormFieldErrors[item.fieldName];
      }
    }
  }

  checkAllDataFormFieldErrors() {
    if (!this.isDataFormFieldErrorsChecked) {
      this.formService.checkFormValidation(this.dataForm);
      this.config.items.forEach(item => this.checkDataFormFieldErrorsByFormItem(item));
    } else {
      this.isDataFormFieldErrorsChecked = true;
    }
  }

  clearAllDataFormFieldErrors() {
    this.dataFormFieldErrors = {};
    this.isDataFormFieldErrorsChecked = false;
  }

  onButtonItemClick(item: CrudFormButtonItem) {
    if (item.behavior === ActionBehavior.Route) {
      /* navigate */
      this.router.navigateByUrl(item.redirectUrl);
    } else if (item.behavior === ActionBehavior.Emit) {
      /* emit */
      const actionResponse: ActionResponse = {
        action: item
      };
      this.buttonClick.emit(actionResponse);
    }
  }

  onLabelMenuItemClick(menuItem: CrudFormItemMenuItem) {
    this.labelMenuItemClick.emit(menuItem);
  }

  onFieldValueChange(item: CrudFormItem, value: any) {
    if (this.config.inputChangeReaction === CrudFormConfigInputChangeReaction.Default) {
      /* set error for changed field */
      this.checkDataFormFieldErrorsByFormItem(item);
      /* emit valid status of the form */
      this.emitValidity();
      /* get changed field body */
      const changedFieldBody = this.getChangedFieldValueBody(item.fieldName, value);
      /* emit */
      this.emitFieldValue(changedFieldBody);
    }
  }

  onFieldBlur(fieldName: string) {
    if (this.config?.inputChangeReaction === CrudFormConfigInputChangeReaction.Blur) {
      /* get changed field body */
      const changedFieldBody = this.getChangedFieldValueBody(fieldName);
      /* emit the changed value */
      this.emitFieldValue(changedFieldBody);
    }
  }

  getChangedFieldValueBody(fieldName: string, value?: any) {
    /* get changed field as nested */
    const targetNestedFieldNames = this.getActiveFieldNamesFromActiveBreadcrumbOption(fieldName);
    /* get value from the form if not specified */
    if (!value) {
      /* get field value */
      value = this.dataForm.get(targetNestedFieldNames).value;
    }
    /* define patch data */
    const patchData = {};
    /* set patch data */
    set(patchData, targetNestedFieldNames, value);
    /* return patch data */
    return patchData;
  }

  onFormSubmit() {
    this.checkAllDataFormFieldErrors();
    this.emitValidity();
    if (this.dataForm.valid) {
      this.emitFormSubmit();
    }
  }

  emitFormSubmit() {
    this.emitValidity();
    let returnData;
    if (this.config.formValueEmitMode === CrudFormValueEmitMode.ReturnAllValues || !this.config.formValueEmitMode) {
      returnData = this.dataForm.value;
    } else if (this.config.formValueEmitMode === CrudFormValueEmitMode.ReturnDirtyValues) {
      returnData = this.formService.getDirtyFormValues(this.dataForm);
    }
    this.formSubmit.emit(returnData);
  }

  emitFormValue() {
    this.emitValidity();
    let returnData;
    if (this.config.formValueEmitMode === CrudFormValueEmitMode.ReturnAllValues || !this.config.formValueEmitMode) {
      returnData = this.dataForm.value;
    } else if (this.config.formValueEmitMode === CrudFormValueEmitMode.ReturnDirtyValues) {
      returnData = this.formService.getDirtyFormValues(this.dataForm);
    }
    this.formValueChange.emit(returnData);
  }

  emitValidity() {
    if (this.dataForm) {
      this.validityChange.emit(this.dataForm.valid);
    }
  }

  emitFieldValue(value: any) {
    this.fieldValueChange.emit(value);
    this.emitFormValue();
  }

  getActiveFieldNamesFromActiveBreadcrumbOption(fieldName: string) {
    return [
      ...this.objectFieldEditModal.breadcrumbOptions?.map(option => option.data.fieldName) || [],
      fieldName
    ];
  }

  processDataPreview(item: CrudFormObjectItem): string {
    if (item.dataPreview) {
      const nestedFieldNames = this.getActiveFieldNamesFromActiveBreadcrumbOption(item.fieldName);
      const fieldValue = this.dataForm.get(nestedFieldNames).value || null;
      let text = item.dataPreview;
      item.dataPreview.match(/{{\s*[^{]*\s*}}/g).forEach(word => {
        const targetFieldName = word.match(/[^{}\s]+/g).toString();
        text = text.replace(word, fieldValue[targetFieldName] || '').trim();
      });
      return text;
    } else {
      return null;
    }
  }

  // #region OBJECT FIELD EDIT MODAL FUNCTIONS

  onObjectFormItemEditClick(item: CrudFormItem) {
    /* open modal if item is in main form items */
    if (this.config.items.includes(item)) {
      this.onObjectFieldEditModalOpen(item);
    } else {
      /* create breadcrumb option */
      const breadcrumbOption = this.createBreadcrumbOptionByObjectItem(
        this.objectFieldEditModal.activeBreadcrumbOption.data.form,
        item
      );
      /* add breadcrumb option */
      this.addBreadcrumbOptionToObjectFieldEditModal(breadcrumbOption);
      /* set active breadcrumb option */
      this.setActiveBreadcrumbOptionOfObjectFieldEditModal(breadcrumbOption);
    }
  }

  showObjectFieldModal() {
    this.objectFieldEditModal.visible = true;
  }

  hideObjectFieldModal() {
    this.objectFieldEditModal.visible = false;
  }

  onObjectFieldEditModalOpen(item: CrudFormItem) {
    /* clear breadcrumb options */
    this.clearBreadcrumbOptionsInObjectFieldEditModal();
    /* show object field edit modal */
    this.showObjectFieldModal();
    /* set object field edit modal by object item ( init ) */
    this.setObjectFieldEditModalByObjectItem(this.dataForm, item);
  }

  createBreadcrumbOptionByObjectItem(form: FormGroup, item: CrudFormObjectItem): BreadcrumbOption {
    return <BreadcrumbOption>{
      label: item.title,
      data: {
        fieldName: item.fieldName,
        items: item.items,
        form: form.get(item.fieldName)
      },
      emittable: true
    };
  }

  setObjectFieldEditModalByObjectItem(form: FormGroup, item: CrudFormItem) {
    /* get breadcrumb option */
    const breadcrumbOption = this.createBreadcrumbOptionByObjectItem(form, item);
    /* add breadcrumb option */
    this.addBreadcrumbOptionToObjectFieldEditModal(breadcrumbOption);
    /* set active breadcrumb option */
    this.setActiveBreadcrumbOptionOfObjectFieldEditModal(breadcrumbOption);
  }

  onObjectFieldEditModalClose() {
    this.hideObjectFieldModal();
    this.resetObjectFieldEditModal();
  }

  onObjectFieldEditModalSubmit() {
    /*
      if breadcrumb is exist, get backward of the selected breadcrumb
      if there is no backward breadcrumb or there is no breadcrumb at all then hide modal
    */
    /* get selected breadcrumb option index */
    const selectedBreadcrumbOptionIndex = this.getSelectedBreadcrumbOptionIndexOfObjectEditModal(
      this.objectFieldEditModal.activeBreadcrumbOption
    );
    /* backward from selected breadcrumb option */
    const breadcrumbOption = this.objectFieldEditModal.breadcrumbOptions[selectedBreadcrumbOptionIndex - 1];
    if (breadcrumbOption) {
      this.onObjectFieldEditModalBreadcrumbOptionClick(breadcrumbOption);
    } else {
      this.hideObjectFieldModal();
    }
  }

  resetObjectFieldEditModal() {
    this.clearBreadcrumbOptionsInObjectFieldEditModal();
    this.objectFieldEditModal.activeBreadcrumbOption = null;
  }

  /* breadcrumb functions */

  clearBreadcrumbOptionsInObjectFieldEditModal() {
    this.objectFieldEditModal.breadcrumbOptions = [];
  }

  addBreadcrumbOptionToObjectFieldEditModal(breadcrumbOption: BreadcrumbOption) {
    this.objectFieldEditModal.breadcrumbOptions.push(breadcrumbOption);
  }

  getActiveBreadcrumbOptionInObjectFieldEditModal() {
    if (this.objectFieldEditModal?.breadcrumbOptions.length) {
      const lastIndex = this.objectFieldEditModal?.breadcrumbOptions.length - 1;
      return this.objectFieldEditModal.breadcrumbOptions[lastIndex];
    } else {
      return null;
    }
  }

  setActiveBreadcrumbOptionOfObjectFieldEditModal(breadcrumbOption: BreadcrumbOption) {
    this.objectFieldEditModal.activeBreadcrumbOption = breadcrumbOption;
  }

  onObjectFieldEditModalBreadcrumbOptionClick(breadcrumbOption: BreadcrumbOption) {
    /* slice unnecessary breadcrumbs and set it */
    const indexOfActiveBreadcrumb = this.objectFieldEditModal.breadcrumbOptions.findIndex(option => option === breadcrumbOption);
    const breadcrumbOptions = this.objectFieldEditModal.breadcrumbOptions.slice(0, indexOfActiveBreadcrumb + 1);
    this.setBreadcrumbOptionsOfObjectFieldEditModal(breadcrumbOptions);
    /* set active breadcrumb option */
    const activeBreadcrumbOption = this.getActiveBreadcrumbOptionInObjectFieldEditModal();
    this.setActiveBreadcrumbOptionOfObjectFieldEditModal(activeBreadcrumbOption);
  }

  setBreadcrumbOptionsOfObjectFieldEditModal(breadcrumbOptions: BreadcrumbOption[]) {
    this.objectFieldEditModal.breadcrumbOptions = breadcrumbOptions;
  }

  getSelectedBreadcrumbOptionIndexOfObjectEditModal(breadcrumbOption: BreadcrumbOption): number {
    const index = this.objectFieldEditModal.breadcrumbOptions?.findIndex(option => option === breadcrumbOption);
    return index !== -1 ? index : null;
  }

  // #endregion

  // #region PUBLIC FUNCTIONS

  public submit() {
    this.onFormSubmit();
  }

  public reset() {
    this.resetForm();
  }

  public getFormValue(): any {
    return this.dataForm.value;
  }

  public getFormValidity(): boolean {
    return this.dataForm.valid;
  }

  // #endregion

}
