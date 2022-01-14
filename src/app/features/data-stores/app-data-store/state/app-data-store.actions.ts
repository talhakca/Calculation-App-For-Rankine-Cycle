/*
  UI Data Store ID: 1e6f0bc2-c15b-4313-993a-05666a2ec29d
  UI Data Store Name: AppDataStore
*/

/* angular */
import { createAction, props } from '@ngrx/store';

/* action types */
export enum ActionTypes {
  InitApp = '[APPDATASTORE] InitApp',
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);
