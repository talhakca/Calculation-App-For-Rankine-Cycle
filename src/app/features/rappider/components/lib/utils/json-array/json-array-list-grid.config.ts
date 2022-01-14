import { ActionBehavior } from '../action-utils/action-behavior.enum';
import { CrudTableViewConfig } from '../list-grid/crud-table-view-config.interface';

export const JSON_ARRAY_LIST_GRID_CONFIG: CrudTableViewConfig = {
  defaultSearchField: 'title',
  columns: [],
  listActions: [],
  itemActions: [{
    icon: 'far fa-trash',
    behavior: ActionBehavior.Emit,
    name: 'DELETE'
  },
  {
    icon: 'fas fa-pen',
    behavior: ActionBehavior.Emit,
    name: 'EDIT'
  }],
  orderable: true,
  searchable: false,
  columnVisibilitySelectable: false
};
