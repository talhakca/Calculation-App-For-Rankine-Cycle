import { InputSize } from '../common-utils/input-size.enum';
import { TextBoxType } from '../textbox/textbox-type.enum';
import { CrudFormItem } from './crud-form-item.interface';
import { CrudFormMentionItem } from './crud-form-mention-item.interface';

export interface CrudFormTextBoxItem extends CrudFormItem, CrudFormMentionItem {
  mask?: Array<RegExp | string>;
  maskGuide?: boolean;
  textType?: TextBoxType;
  size?: InputSize;
  disabled?: boolean;
}
