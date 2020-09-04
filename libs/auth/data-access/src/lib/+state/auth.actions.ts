import { createAction, props } from '@ngrx/store';
import { UserModel } from '@todo-application/auth/domain';

export const userLoggedIn = createAction(
  '[Auth] User logged in',
  props<{ user: UserModel }>()
);

export const userLoggedOut = createAction(
  '[Auth] User logged out'
);
