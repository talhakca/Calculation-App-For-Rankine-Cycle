import { Action } from '../action-utils/action.interface';
import { InputSize } from '../common-utils/input-size.enum';
import { CrudFormItem } from './crud-form-item.interface';

export interface CrudFormButtonItem extends CrudFormItem, Action {
  size?: InputSize;
}
