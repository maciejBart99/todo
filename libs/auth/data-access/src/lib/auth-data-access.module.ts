import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, reducer } from './+state/auth.reducer';
import { AuthStoreFacade } from './+state/auth-store.facade';
import { AuthFacade } from '@todo-application/auth/domain';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(AUTH_FEATURE_KEY, reducer)],
  providers: [{provide: AuthFacade, useClass: AuthStoreFacade}]
})
export class AuthDataAccessModule {}
