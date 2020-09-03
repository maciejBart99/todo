import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, reducer } from './+state/auth.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(AUTH_FEATURE_KEY, reducer)],
})
export class AuthDataAccessModule {}
