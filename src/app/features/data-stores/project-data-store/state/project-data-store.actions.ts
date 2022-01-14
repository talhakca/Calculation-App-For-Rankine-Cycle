/*
  UI Data Store ID: c37b0f2a-45c2-4094-bb0d-73c9297ef188
  UI Data Store Name: ProjectDataStore
*/

/* angular */
import { createAction, props } from '@ngrx/store';

/* payloads */
import {
  GetProjectSuccessfulActionPayload,
  GetProjectActionPayload,
} from 'src/app/features/shared/models';
import { Project } from 'src/app/features/shared/sdk/models';

/* action types */
export enum ActionTypes {
  UpdateProjectSuccessful = '[PROJECTDATASTORE] UpdateProjectSuccessful',
  GetProjectFailure = '[PROJECTDATASTORE] GetProjectFailure',
  GetProjectSuccessful = '[PROJECTDATASTORE] GetProjectSuccessful',
  CreateProjectFailure = '[PROJECTDATASTORE] CreateProjectFailure',
  CreateProject = '[PROJECTDATASTORE] CreateProject',
  CreateProjectSuccessful = '[PROJECTDATASTORE] CreateProjectSuccessful',
  DeleteProjectFailure = '[PROJECTDATASTORE] DeleteProjectFailure',
  DeleteProject = '[PROJECTDATASTORE] DeleteProject',
  UpdateProjectFailure = '[PROJECTDATASTORE] UpdateProjectFailure',
  DeleteProjectSuccessful = '[PROJECTDATASTORE] DeleteProjectSuccessful',
  UpdateProject = '[PROJECTDATASTORE] UpdateProject',
  GetProject = '[PROJECTDATASTORE] GetProject',
}

/* actions */

export const UpdateProjectSuccessful = createAction(
  ActionTypes.UpdateProjectSuccessful
);

export const GetProjectFailure = createAction(ActionTypes.GetProjectFailure);

export const GetProjectSuccessful = createAction(
  ActionTypes.GetProjectSuccessful,
  props<{ payload: GetProjectSuccessfulActionPayload }>()
);

export const CreateProjectFailure = createAction(
  ActionTypes.CreateProjectFailure
);

export const CreateProject = createAction(
  ActionTypes.CreateProject,
  props<{ payload: { project: Project } }>()
);

export const CreateProjectSuccessful = createAction(
  ActionTypes.CreateProjectSuccessful,
  props<{ payload: { project: Project } }>()
);

export const DeleteProjectFailure = createAction(
  ActionTypes.DeleteProjectFailure
);

export const DeleteProject = createAction(ActionTypes.DeleteProject);

export const UpdateProjectFailure = createAction(
  ActionTypes.UpdateProjectFailure
);

export const DeleteProjectSuccessful = createAction(
  ActionTypes.DeleteProjectSuccessful
);

export const UpdateProject = createAction(ActionTypes.UpdateProject);

export const GetProject = createAction(
  ActionTypes.GetProject,
  props<{ payload: GetProjectActionPayload }>()
);
