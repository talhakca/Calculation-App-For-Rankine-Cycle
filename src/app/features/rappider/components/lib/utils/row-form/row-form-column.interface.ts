import { CrudFormItemValidator } from '../edit-form/crud-form-item-validator.interface';

export interface RowFormColumn {
  fieldName: string;
  placeholder?: string;
  unique?: boolean;
  validators?: CrudFormItemValidator[];
  visible?: boolean;
}
