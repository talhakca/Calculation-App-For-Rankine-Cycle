import { Component, OnInit, forwardRef, Input, OnDestroy, EventEmitter, OnChanges, SimpleChanges, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormArray, ControlValueAccessor } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { Subscription } from 'rxjs';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormService } from '../../services';
import {
  UniqueValidator,
  RowFormColumn
} from '../../utils';


@Component({
  selector: 'rappider-row-form',
  templateUrl: './row-form.component.html',
  styleUrls: ['./row-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRowFormComponent),
      multi: true
    }
  ]
})
export class RappiderRowFormComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

  /* orderable */
  @Input() orderable: boolean;
  /* columns */
  @Input() columns: RowFormColumn[];
  /* text of add button */
  @Input() addButtonText: string;
  /* visibility status of add button */
  @Input() addButtonVisible: boolean;
  /* has initial empty row, if true adds empty row */
  @Input() hasInitialEmptyRow: boolean;

  /* returns KeyValue paired data of the row */
  @Output() rowDataChange = new EventEmitter<KeyValue<string, any>>();
  /* returns nothing, just trigger */
  @Output() rowInsert = new EventEmitter();
  /* returns nothing, just trigger */
  @Output() rowIndexChange = new EventEmitter();
  /* returns deleted row data */
  @Output() rowDelete = new EventEmitter<KeyValue<string, any>>();
  @Output() blur = new EventEmitter();

  form: FormGroup;

  subscriptions: Subscription[];

  _value: any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.createInitialEmptyRow();
    this.initRowListForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.initRowListForm();
    }
  }

  ngOnDestroy() {
    this.subscriptions?.forEach(subscription => subscription.unsubscribe());
  }

  get value() {
    return this.getRowsFormArray()?.value;
  }

  set value(value: any[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value) {
    this._value = value;
    this.setFormItems(value);
  }

  setFormItems(value: any[]) {
    /* if the datas not initialized to the form then add them all to the form */
    if (value && this.form && this.getValidFormValues().length !== value.length) {
      this.getRowsFormArray().clear();
      value.forEach(item => this.insertListItemByData(item));
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  initRowListForm() {
    /* set form as null if config is invalid */
    if (!this.columns?.length) {
      this.form = null;
    } else {
      /* set form array validators */
      const uniqueFieldNames = this.columns.filter(column => column.unique).map(column => column.fieldName);
      const formArrayValidators: any[] = [
        ...uniqueFieldNames.map(fieldName => UniqueValidator(fieldName))
      ];
      /* create form array */
      this.form = this.formBuilder.group({
        rows: this.formBuilder.array([], { validators: formArrayValidators })
      });
      this.subscribeToData();
    }
  }

  createInitialEmptyRow() {
    if (this.hasInitialEmptyRow) {
      /* push new row form */
      const newRowForm = this.createRowForm('');
      this.getRowsFormArray()?.push(newRowForm);
      /* emit row insert */
      this.rowInsert.emit();
    } else {
      return;
    }
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToRowsForm()
    ];
  }

  subscribeToRowsForm() {
    return this.getRowsFormArray().valueChanges.subscribe(() => {
      this.writeValidFormValues();
    });
  }

  getRowsFormArray(): FormArray {
    return <FormArray>this.form?.get('rows');
  }

  getValidFormValues(): any[] {
    /* get form array */
    const rowsFormArray = this.getRowsFormArray();
    /* get valid form groups of the form artraarray */
    const validForms = rowsFormArray.controls.filter(form => form.valid);
    /* get valid form values */
    let validFormValues: any[] = validForms.map(validForm => validForm.value);
    /* get invisible field names from columns config */
    const invisibleFieldNames = this.columns
      .filter(column => column.visible === false)
      .map(column => column.fieldName);
    /* delete unvalued field if the field is invisible */
    if (invisibleFieldNames?.length) {
      validFormValues = validFormValues.map(item => {
        invisibleFieldNames.forEach(invisibleFieldName => {
          if (!item[invisibleFieldName]) {
            delete item[invisibleFieldName];
          }
        });
        return item;
      });
    }
    return validFormValues;
  }

  writeValidFormValues() {
    const validValues = this.getValidFormValues();
    this.value = validValues;
  }

  onRowDelete(index: number) {
    const rowsFormArray = this.getRowsFormArray();
    const data = rowsFormArray.at(index).value;
    rowsFormArray.removeAt(index);
    this.rowDelete.emit(data);
  }

  onRowDataChange(index: number) {
    /* Check if the line is valid */
    const isValid = this.getRowsFormArray().at(index).valid;
    /* Performs the transaction if the changed data is valid */
    if (isValid) {
      /* get changed row data */
      const rowData = this.getRowsFormArray().at(index).value;
      /* emit row data */
      this.rowDataChange.emit(rowData);
    }
  }

  insertListItem() {
    /* remove empty list items */
    this.removeEmptyListItems();
    /* push new row form */
    const newRowForm = this.createRowForm();
    this.getRowsFormArray().push(newRowForm);
    /* emit row insert */
    this.rowInsert.emit();
  }

  insertListItemByData(data?: any) {
    /* remove empty list items */
    this.removeEmptyListItems();
    /* push new row form */
    const newRowForm = this.createRowForm(data);
    this.getRowsFormArray().push(newRowForm);
  }

  removeListItem(index: number) {
    const rowsFormArray = this.getRowsFormArray();
    const deletedData = rowsFormArray.at(index).value;
    rowsFormArray.removeAt(index);
    this.rowDelete.emit(deletedData);
    /* Fixme: https://app.shortcut.com/hicelerate/story/4252/row-form-update */
    this.onBlur();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (this.orderable) {
      if (event.previousIndex !== event.currentIndex) {
        const rowsFormArray = this.getRowsFormArray();
        moveItemInArray(rowsFormArray.controls, event.previousIndex, event.currentIndex);
        this.writeValidFormValues();
        this.rowIndexChange.emit();
      }
    }
  }

  createRowForm(data?: any) {
    /* create a list item */
    const formFields = {};
    this.columns.forEach(column => {
      /* get initial value */
      const value = data && data[column.fieldName] || null;
      /* get form field validators */
      const fieldValidators = column.validators?.filter(validator => validator.type).map(validator => validator.type) || [];
      /* set form field */
      formFields[column.fieldName] = [value, fieldValidators];
    });
    /* create form group */
    const form = this.formBuilder.group(formFields);
    if (data) {
      this.formService.checkFormValidation(form);
    }
    return form;
  }

  isEmptyObject(row: any): boolean {
    return !Object.values(row).some(value => (value !== null && value !== '' && value !== undefined));
  }

  removeEmptyListItems() {
    const rowsFormArray = this.getRowsFormArray();
    if (rowsFormArray?.length) {
      for (let i = 0; i < rowsFormArray.length; i++) {
        const isEmpty = this.isEmptyObject(rowsFormArray.controls[i].value);
        if (isEmpty) {
          this.removeListItem(i);
          i--;
        }
      }
    }
  }

  onBlur() {
    this.blur.emit(this.value);
  }

}
