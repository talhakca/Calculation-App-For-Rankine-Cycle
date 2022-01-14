import { IconType } from './icon-type.enum';
import { NgZorroIconTheme } from './ng-zorro-icon-theme.enum';

export interface IconComponentConfig {
  name: string; /* icon class */
  type?: IconType;
  theme?: NgZorroIconTheme; /* for ng zorro type */
  color?: string;
}
