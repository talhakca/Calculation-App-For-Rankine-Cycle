import { Action } from '../action-utils/action.interface';
import { InputSize } from '../common-utils/input-size.enum';
import { CrudTableViewColumn } from './crud-table-view-column.interface';
import { CrudViewConfig } from './crud-view-config.interface';
import { ListGridOrder } from './list-grid-order.interface';

export interface CrudTableViewConfig extends CrudViewConfig {
  title?: string;
  columnVisibilitySelectable?: boolean;
  searchable?: boolean; /* display a search field in order to search by text */
  defaultSearchField?: string; /* key of the field name that is going to be searched on */
  columns: CrudTableViewColumn[];
  selectable?: boolean;
  enableMultipleSelection?: boolean;
  listActions?: Action[];
  size?: InputSize;
  orderable?: boolean; /* allow to drag drop row item in order to order the item */
  order?: ListGridOrder;
  handleVisibilityFn?: Function;
  pageSize?: number;
  showPagination?: boolean;
  itemActionsLength?: number;
}
