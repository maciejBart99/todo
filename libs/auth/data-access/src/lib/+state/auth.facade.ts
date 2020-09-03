import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { UserModel } from '@todo-application/shared/domain';


@Injectable()
export class AuthFacade {
  user$ = this.store.pipe(select(AuthSelectors.getCurrentUser));

  constructor(private store: Store<fromAuth.AuthPartialState>) {}

  logIn(user: UserModel): void {
    this.store.dispatch(AuthActions.userLoggedIn({user}));
  }

  logOut(): void {
    this.store.dispatch(AuthActions.userLoggedOut());
  }
}
