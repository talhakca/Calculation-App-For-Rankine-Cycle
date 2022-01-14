/*
  UI Data Store ID: c37b0f2a-45c2-4094-bb0d-73c9297ef188
  UI Data Store Name: ProjectDataStore
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

/* lodash lib */
import * as lodash from 'lodash';

/* project-data-store actions */
import * as ProjectDataStoreActions from 'src/app/features/data-stores/project-data-store/state/project-data-store.actions';
import * as AppActions from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { ProjectControllerService, UserControllerService } from 'src/app/features/shared/sdk/services';
import { Project } from 'src/app/features/shared/sdk/models';
import { Navigate } from '../../router-data-store/state/router-data-store.actions';
import { User } from 'src/app/features/shared/sdk/models';

@Injectable()
export class ProjectDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private router: Router,
    private projectApi: ProjectControllerService,
    private userApi: UserControllerService
  ) { }

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.InitApp),
      withLatestFrom(
        this.store.select(state => state['auth']?.user?.id)
      ),
      mergeMap(([action, userId]) => {
        const filter = { where: { id: userId }, include: ['projects'] };
        return this.projectApi.find({ filter: filter }).pipe(
          mergeMap((projects: Project[]) => {
            return [
              ProjectDataStoreActions.GetProjectSuccessful({ payload: { projects: projects } })
            ];
          })
        )
      })
    )
  );

  createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDataStoreActions.CreateProject),
      withLatestFrom(
        this.store.select(state => state.auth.user.id)
      ),
      mergeMap(([action, userId]) => {
        const createdProject = {
          ...action.payload.project,
          userId: userId
        };
        return this.projectApi.create({ body: createdProject }).pipe(
          mergeMap((project: Project) => {
            return [
              ProjectDataStoreActions.CreateProjectSuccessful({ payload: { project: project } })
            ];
          })
        )
      })
    )
  );

  navigateToListPage = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDataStoreActions.CreateProjectSuccessful),
      mergeMap((action) => {
        return [Navigate({ payload: { path: '' } })]
      })
    )
  );
}
