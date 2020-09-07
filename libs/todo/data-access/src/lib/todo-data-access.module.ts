import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';
import { TodosFacade } from './+state/todos.facade';
import { TodoDataService } from './services/todo-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoLocalStorageService } from './services/todo-local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosFacade, {provide: TodoDataService, useClass: TodoLocalStorageService}],
})
export class TodoDataAccessModule {}
