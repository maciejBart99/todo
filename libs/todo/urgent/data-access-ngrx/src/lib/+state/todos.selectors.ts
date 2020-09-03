import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TODOS_FEATURE_KEY,
  State,
  TodosPartialState,
  todosAdapter,
} from './todos.reducer';
import { TodosEntity } from '@todo-application/todo/domain';

// Lookup the 'Todos' feature-regular-todos state managed by NgRx
export const getTodosState = createFeatureSelector<TodosPartialState, State>(
  TODOS_FEATURE_KEY
);

const { selectAll, selectEntities } = todosAdapter.getSelectors();

export const getTodosLoaded = createSelector(
  getTodosState,
  (state: State) => state.loaded
);

export const getAllTodos = createSelector(getTodosState, (state: State) =>
  selectAll(state)
);

export const getAllDone = createSelector(getAllTodos, (todos: TodosEntity[]) =>
  todos.filter(todo => todo.done)
);

export const getAllNotDone = createSelector(getAllTodos, (todos: TodosEntity[]) =>
  todos.filter(todo => !todo.done)
);

export const getTodosEntities = createSelector(getTodosState, (state: State) =>
  selectEntities(state)
);
