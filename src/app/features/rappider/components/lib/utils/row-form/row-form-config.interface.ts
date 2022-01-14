import { RowFormColumn } from './row-form-column.interface';

export interface RowFormConfig {
  orderable?: boolean; /* allow to drag drop row item in order to order the item */
  addButtonVisible?: boolean;
  addButtonText?: string;
  columns: RowFormColumn[];
  hasInitialEmptyRow: boolean;
}
