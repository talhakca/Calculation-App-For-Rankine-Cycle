import { TextBoxType } from './textbox-type.enum';

export interface TextboxComponentConfig {
  placeholder?: string;
  type?: TextBoxType;
  mask?: Array<RegExp | string>;
  maskGuide?: boolean;
  height?: string;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  disabled?: boolean;
  mentionSupported?: boolean;
  mentionPrefix?: string;
  mentionValues?: any;
}
