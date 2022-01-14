import { CrudFormItemMenu } from './crud-form-item-menu.interface';
import { CrudFormItemValidator } from './crud-form-item-validator.interface';
import { CrudViewFormItemType } from './crud-view-form-item-type.enum';

export interface CrudFormItem {
  title?: string;
  fieldName?: string;
  placeholder?: string;
  type: CrudViewFormItemType;
  description?: string;
  hint?: string;
  labelIcon?: string; /* font awesome css class */
  index?: number;
  showRequiredSign?: boolean; /* adds (*) character as prefix to title  */
  showColonSign?: boolean; /* adds (:) character as suffix to title  */
  validators?: CrudFormItemValidator[];
  cssClass?: string;
  cssStyle?: { [key: string]: any };
  visible?: boolean;
  loading?: boolean;
  menu?: CrudFormItemMenu;
  section?: string;
}
