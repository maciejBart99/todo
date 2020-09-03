import { createAction, props } from '@ngrx/store';
import { TodosEntity } from '@todo-application/todo-app/todo/domain';

export const loadTodos = createAction('[Todos urgent] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos urgent] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos urgent] Load Todos Failure'
);

export const addTodo = createAction(
  '[Todos urgent] Load Todos Failure',
  props<{ todo: TodosEntity }>()
);

export const addTodoSuccess = createAction(
  '[Todos urgent] Add todo success',
  props<{ todo: TodosEntity }>()
);

export const addTodoFailure = createAction(
  '[Todos urgent] Add todo failure'
);

export const editTodo = createAction(
  '[Todos urgent] Edit todo',
  props<{ todo: TodosEntity, patch: Partial<TodosEntity> }>(),
);

export const editTodoSuccess = createAction(
  '[Todos urgent] Edit todo success',
  props<{ todo: TodosEntity, patch: Partial<TodosEntity> }>()
);

export const editTodoFailure = createAction(
  '[Todos urgent] Edit todo failure'
);

export const removeTodo = createAction(
  '[Todos urgent] Remove todo',
  props<{ todo: TodosEntity }>()
);

export const removeTodoSuccess = createAction(
  '[Todos urgent] Remove todo success',
  props<{ todo: TodosEntity }>()
);

export const removeTodoError = createAction(
  '[Todos urgent] Remove todo success'
);

export const toggleDone = createAction(
  '[Todos urgent] Toggle done',
  props<{ todo: TodosEntity }>()
);
