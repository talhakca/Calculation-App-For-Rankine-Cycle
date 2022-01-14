import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { DropdownMenuItem } from './dropdown-menu-item.interface';
import { DropdownMenuPlacement } from './dropdown-menu-placement.enum';
import { DropdownMenuTriggerType } from './dropdown-menu-trigger-type.enum';

export interface DropdownMenuComponentConfig {
  label?: string;
  items?: DropdownMenuItem[];
  placement?: DropdownMenuPlacement;
  icon?: IconComponentConfig;
  triggerType?: DropdownMenuTriggerType;
}
