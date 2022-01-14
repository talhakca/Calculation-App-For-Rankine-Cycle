/*
  UI Data Store ID: 1e6f0bc2-c15b-4313-993a-05666a2ec29d
  UI Data Store Name: AppDataStore
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

/* lodash lib */
import * as lodash from 'lodash';

@Injectable()
export class AppDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private router: Router
  ) {}
}
