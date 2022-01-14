/* angular */
import { createReducer, on } from '@ngrx/store';

/* actions */
import * as RouterDataStoreActions from './router-data-store.actions';

/* state key */
export const featureKey = 'RouterDataStore';

/* state interface */
export interface RouterState {
  queryParams: any;
  params: any;
}

/* initial values */
export const initialState: RouterState = {
  queryParams: {},
  params: {},
};

export const reducer = createReducer(
  initialState,
  on(RouterDataStoreActions.SetParams, (state, action) => ({
    ...state,
    params: action.payload.params,
  })),
  on(RouterDataStoreActions.SetQueryParams, (state, action) => ({
    ...state,
    queryParams: action.payload.queryParams,
  }))
);
