import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './+state/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './+state/todos.effects';
import { TodosFacade } from './+state/todos.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosFacade],
})
export class TodoUrgentDataAccessNgrxModule {}
