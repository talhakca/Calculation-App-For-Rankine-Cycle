import { DropdownMenuComponentConfig } from '../dropdown-menu/dropdown-menu.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';

export interface IconAndMenuListItem {
  title?: string;
  description?: string;
  icon?: IconComponentConfig;
  dropdownMenu?: DropdownMenuComponentConfig;
}
