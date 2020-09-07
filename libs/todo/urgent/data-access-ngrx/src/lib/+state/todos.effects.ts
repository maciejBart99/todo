import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

import * as TodosActions from './todos.actions';
import { delay, map, switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromTodos from './todos.reducer';
import { PublicAuthFacadeService } from '@todo-application/auth/public';
import { TodoDataService } from '@todo-application/todo/urgent/util-abstract-data-service';

@Injectable()
export class TodosEffects {
  setUser$ = createEffect(() => this.authFacade.getCurrentUserId().pipe(
    map(_ => TodosActions.loadTodos())
  ));

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      fetch({
        run: (action) => {
          return this.authFacade.getCurrentUserId().pipe(take(1), switchMap(user => this.todosService.getAllTodos(user)),
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
          return this.authFacade.getCurrentUserId().pipe(take(1), switchMap(user =>  this.todosService.editTodo(user, action.todo, action.patch)),
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
          return this.authFacade.getCurrentUserId().pipe(take(1), switchMap(user =>  this.todosService.editTodo(user, action.todo, {done: !action.todo.done})),
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

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodo),
      pessimisticUpdate({
        run: (action) => {
          return this.authFacade.getCurrentUserId().pipe(take(1), switchMap(user =>  this.todosService.addTodo(user, action.todo)),
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
          return this.authFacade.getCurrentUserId().pipe(take(1), switchMap(user =>  this.todosService.removeTodo(user, action.todo)),
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
              private todosService: TodoDataService,
              private authFacade: PublicAuthFacadeService) {}
}
