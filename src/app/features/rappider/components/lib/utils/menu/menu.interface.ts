import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { MenuActionBehavior } from './menu-action-behavior.enum';

export interface Menu {
  label: string;
  key?: string;
  data?: any;
  icon?: IconComponentConfig;
  children?: Menu[];
  level?: number;
  disabled?: boolean;
  selected?: boolean;
  style?: string;
  tag?: string;
  tagColor?: string;
  actionBehavior?: MenuActionBehavior;
  redirectUrl?: string;
  queryParams?: Record<string, unknown>;
  isExpanded?: boolean;
  tooltip?: string;
}
