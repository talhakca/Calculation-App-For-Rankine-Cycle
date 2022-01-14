/* angular */
import { createAction, props } from '@ngrx/store';

/* payloads */
import {
  // NavigateActionPayload,
  // SetParamsActionPayload,
  // SetQueryParamsActionPayload,
} from 'src/app/features/shared/models';

/* action types */
export enum ActionTypes {
  Navigate = '[ROUTERDATASTORE] Navigate',
  SetQueryParams = '[ROUTERDATASTORE] SetQueryParams',
  SetParams = '[ROUTERDATASTORE] SetParams',
}

/* actions */

export const Navigate = createAction(
  ActionTypes.Navigate,
  props<{ payload: any }>()
);

export const SetQueryParams = createAction(
  ActionTypes.SetQueryParams,
  props<{ payload: any }>()
);

export const SetParams = createAction(
  ActionTypes.SetParams,
  props<{ payload: any }>()
);
