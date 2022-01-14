import { SelectableOption } from '../form-utils/selectable-option.type';
import { SelectSettings } from './select-settings.interface';

export interface SelectComponentConfig {
  options: SelectableOption[];
  settings?: SelectSettings;
  placeholder?: string;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  invalidConfigText?: string;
}
