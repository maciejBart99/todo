import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions'
import { UserModel } from '@todo-application/todo-app/shared/domain';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  user: UserModel;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  user: null
}

const authReducer = createReducer(
  initialState,
  on(authActions.userLoggedIn, (state, {user}) => ({
    ...state,
    user: user
  })),
  on(authActions.userLoggedOut, (state) => ({
    ...state,
    user: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
