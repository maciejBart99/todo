import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';

export const loadTodos = createAction('[Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure'
);

export const addTodo = createAction(
  '[Todos] Load Todos Failure',
  props<{ todo: TodosEntity }>()
);

export const addTodoSuccess = createAction(
  '[Todos] Add todo success',
  props<{ todo: TodosEntity }>()
);

export const addTodoFailure = createAction(
  '[Todos] Add todo failure'
);

export const editTodo = createAction(
  '[Todos] Edit todo',
  props<{ todo: TodosEntity, patch: Partial<TodosEntity> }>(),
);

export const editCurrentTodo = createAction(
  '[Todos] Edit current todo',
  props<{ patch: Partial<TodosEntity> }>(),
);

export const editTodoSuccess = createAction(
  '[Todos] Edit todo success',
  props<{ todo: TodosEntity, patch: Partial<TodosEntity> }>()
);

export const editTodoFailure = createAction(
  '[Todos] Edit todo failure'
);

export const removeCurrentTodo = createAction(
  '[Todos] Remove current todo'
);

export const removeTodo = createAction(
  '[Todos] Remove todo',
  props<{ todo: TodosEntity }>()
);

export const removeTodoSuccess = createAction(
  '[Todos] Remove todo success',
  props<{ todo: TodosEntity }>()
);

export const removeTodoError = createAction(
  '[Todos] Remove todo success'
);

export const toggleDone = createAction(
  '[Todos] Toggle done',
  props<{ todo: TodosEntity }>()
);

export const todoSelected = createAction(
  '[Todos] Todo selected',
  props<{todo: TodosEntity}>()
);
