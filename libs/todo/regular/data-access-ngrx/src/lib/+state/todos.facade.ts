import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTodos from './todos.reducer';
import * as TodosActions from './todos.actions';
import * as TodosSelectors from './todos.selectors';
import { TodosEntity } from '@todo-application/todo/domain';
@Injectable()
export class TodosFacade {
  loaded$ = this.store.pipe(select(TodosSelectors.getTodosLoaded));
  allDone$ = this.store.pipe(select(TodosSelectors.getAllDone));
  allNotDone$ = this.store.pipe(select(TodosSelectors.getAllNotDone));

  constructor(private store: Store<fromTodos.TodosPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadTodos(): void {
    this.store.dispatch(TodosActions.loadTodos());
  }

  addTodo(todo: TodosEntity): void {
    this.store.dispatch(TodosActions.addTodo({ todo: todo }));
  }

  toggleTodoDone(todo: TodosEntity): void {
    this.store.dispatch(TodosActions.toggleDone({ todo: todo }));
  }

  removeTodo(todo: TodosEntity): void {
    this.store.dispatch(TodosActions.removeTodo({ todo: todo }));
  }

  editTodo(todo: TodosEntity, patch: Partial<TodosEntity>): void {
    console.log(todo);
    this.store.dispatch(TodosActions.editTodo({ todo: todo, patch: patch }));
  }
}
