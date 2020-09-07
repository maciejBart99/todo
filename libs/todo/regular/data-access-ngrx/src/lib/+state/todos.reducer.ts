import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodosActions from './todos.actions';
import { TodosEntity } from '@todo-application/todo/domain';

export const TODOS_FEATURE_KEY = 'todos-regular';

export interface State extends EntityState<TodosEntity> {
  loaded: boolean;
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<TodosEntity> = createEntityAdapter<
  TodosEntity
>();

export const initialState: State = todosAdapter.getInitialState({
  loaded: false,
  resourceType: 'regular',
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => ({
    ...state,
    loaded: false,
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => {
    state = todosAdapter.removeAll({ ...state, loaded: true });
    return todosAdapter.addMany(todos, state);
  }),
  on(TodosActions.addTodoSuccess, (state, { todo }) =>
    todosAdapter.addOne(todo, { ...state })
  ),
  on(TodosActions.editTodoSuccess, (state, { todo, patch }) =>
    todosAdapter.updateOne({ id: todo.id, changes: patch }, { ...state })
  ),
  on(TodosActions.removeTodoSuccess, (state, { todo }) =>
    todosAdapter.removeOne(todo.id, { ...state })
  )
  // , on(TodosActions.changeType, (state, { resourceType }) =>
  //   ({...state, resourceType: resourceType}))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
