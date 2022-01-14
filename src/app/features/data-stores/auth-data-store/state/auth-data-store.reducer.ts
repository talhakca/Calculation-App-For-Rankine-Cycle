/* angular */
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/features/shared/models';
/* models */
/* actions */
import * as AuthDataStoreActions from './auth-data-store.actions';

/* state key */
export const featureKey = 'auth';

/* state interface */
export interface AuthState {
  user: User | null;
  isLoading: boolean;
}

/* initial values */
export const initialState: AuthState = {
  user: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthDataStoreActions.SetUser, (state, action) => ({
    ...state,
    user: action.payload.user,
    isLoading: false
  })),
  on(AuthDataStoreActions.Register, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthDataStoreActions.GetTokenByCrendentials, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthDataStoreActions.LoginByToken, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthDataStoreActions.LoggedIn, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(AuthDataStoreActions.LoginByTokenFailure, (state, action) => ({
    ...state,
    isLoading: false,
  }))
);
