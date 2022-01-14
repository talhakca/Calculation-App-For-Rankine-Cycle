/*
  UI Data Store ID: 1e6f0bc2-c15b-4313-993a-05666a2ec29d
  UI Data Store Name: AppDataStore
*/

/* angular */
import { createReducer, on } from '@ngrx/store';

/* services */
import { UtilityService } from 'src/app/features/shared/services';

/* service variables */
const utilityService = new UtilityService();

/* actions */
import * as AppDataStoreActions from './app-data-store.actions';

/* state key */
export const featureKey = 'AppDataStore';

/* state interface */
export interface AppState {}

/* initial values */
export const initialState: AppState = {};

export const reducer = createReducer(initialState);
