import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { ButtonColorType } from './button-color-type.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonType } from './button-type.enum';

export interface ButtonComponentConfig {
  key?: string;
  text?: string;
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  transparent?: boolean;
  loading?: boolean;
  block?: boolean;
  disabled?: boolean;
  icon?: IconComponentConfig;
  colorType?: ButtonColorType;
  popconfirmTitle?: string;
  danger?: boolean;
}
