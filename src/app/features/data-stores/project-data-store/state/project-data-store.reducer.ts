/*
  UI Data Store ID: c37b0f2a-45c2-4094-bb0d-73c9297ef188
  UI Data Store Name: ProjectDataStore
*/

/* angular */
import { createReducer, on } from '@ngrx/store';

/* services */
import { UtilityService } from 'src/app/features/shared/services';

/* service variables */
const utilityService = new UtilityService();

/* actions */
import * as ProjectDataStoreActions from './project-data-store.actions';

import { Project } from 'src/app/features/shared/sdk/models';

/* state key */
export const featureKey = 'ProjectDataStore';

/* state interface */
export interface ProjectDataStore {
  isLoading: boolean;
  projects: Project[];
  activeProject: Project;
}

/* initial values */
export const initialState: ProjectDataStore = {
  isLoading: null,
  projects: null,
  activeProject: null
};

export const reducer = createReducer(
  initialState,
  on(ProjectDataStoreActions.GetProjectSuccessful, (state, action) => ({
    ...state,
    projects: action.payload.projects,
  })),
  on(ProjectDataStoreActions.CreateProjectSuccessful, (state, action) => ({
    ...state,
    projects: state.projects ? [...state.projects, action.payload.project] : [action.payload.project],
    activeProject: action.payload.project
  }))
);
