import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodosActions from './todos.actions';
import { TodosEntity } from './todos.models';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<TodosEntity> {
  loaded: boolean; // has the Todos list been loaded
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<TodosEntity> = createEntityAdapter<
  TodosEntity
>();

export const initialState: State = todosAdapter.getInitialState({
  loaded: false,
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => ({
    ...state,
    loaded: false
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) =>
    todosAdapter.addMany(todos, { ...state, loaded: true })
  ),
  on(TodosActions.addTodoSuccess, (state, { todo }) =>
    todosAdapter.addOne(todo, { ...state })
  ),
  on(TodosActions.editTodoSuccess, (state, { todo, patch }) =>
      todosAdapter.updateOne({ id: todo.id, changes: patch }, { ...state })
  ),
  on(TodosActions.removeTodoSuccess, (state, { todo}) =>
    todosAdapter.removeOne(todo.id, { ...state }))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
