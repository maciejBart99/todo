import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

import * as TodosActions from './todos.actions';
import { TodoLocalStorageService } from '../services/todo-local-storage.service';
import { delay, map, withLatestFrom } from 'rxjs/operators';
import { getSelected } from './todos.selectors'
import { Store } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      fetch({
        run: (action) => {
          return this.todosService.getAllTodos().pipe(
            delay(2000), // fake delay to show spinner
            map(todos => TodosActions.loadTodosSuccess({ todos: todos }))
          );
        },
        onError(a, e: any) {
          return TodosActions.loadTodosFailure();
        }
      })
    )
  );

  editTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.editTodo),
      pessimisticUpdate({
        run: (action) => {
          return this.todosService.editTodo(action.todo, action.patch).pipe(
            map(_ => {
              return TodosActions.editTodoSuccess({todo: action.todo, patch: action.patch});
            })
          );
        },
        onError: (action, error) => {
          return TodosActions.editTodoFailure();
        },
      })
    )
  );

  toggleDone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.toggleDone),
      pessimisticUpdate({
        run: (action) => {
          return this.todosService.editTodo(action.todo, {done: !action.todo.done}).pipe(
            map(_ => {
              return TodosActions.editTodoSuccess({todo: action.todo, patch: {done: !action.todo.done}});
            })
          );
        },
        onError: (action, error) => {
          return TodosActions.editTodoFailure();
        },
      })
    )
  );

  editCurrentTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.editCurrentTodo),
      withLatestFrom(this.store.select(getSelected)),
      map(([action, current]) => TodosActions.editTodo({todo:current, patch: action.patch})))
  );

  removeCurrentTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.removeCurrentTodo),
      withLatestFrom(this.store.select(getSelected)),
      map(([_, current]) => TodosActions.removeTodo({todo:current})))
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodo),
      pessimisticUpdate({
        run: (action) => {
          return this.todosService.addTodo(action.todo).pipe(
            map(_ => TodosActions.addTodoSuccess({todo: action.todo}))
          );
        },
        onError: (action, error) => {
          return TodosActions.addTodoFailure();
        },
      })
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.removeTodo),
      pessimisticUpdate({
        run: (action) => {
          return this.todosService.removeTodo(action.todo).pipe(
            map(_ => TodosActions.removeTodoSuccess({todo: action.todo}))
          );
        },
        onError: (action, error) => {
          return TodosActions.removeTodoError();
        },
      })
    )
  );

  constructor(private actions$: Actions,
              private store: Store<fromTodos.TodosPartialState>,
              private todosService: TodoLocalStorageService) {}
}
