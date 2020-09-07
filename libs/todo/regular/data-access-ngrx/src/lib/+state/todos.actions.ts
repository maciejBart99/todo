import { createAction, props } from '@ngrx/store';
import { TodosEntity } from '@todo-application/todo/domain';

export const loadTodos = createAction('[Todos regular] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos regular] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos regular] Load Todos Failure'
);

export const addTodo = createAction(
  '[Todos regular] Load Todos Failure',
  props<{ todo: TodosEntity }>()
);

export const addTodoSuccess = createAction(
  '[Todos regular] Add todo success',
  props<{ todo: TodosEntity }>()
);

export const addTodoFailure = createAction('[Todos regular] Add todo failure');

export const editTodo = createAction(
  '[Todos regular] Edit todo',
  props<{ todo: TodosEntity; patch: Partial<TodosEntity> }>()
);

export const editTodoSuccess = createAction(
  '[Todos regular] Edit todo success',
  props<{ todo: TodosEntity; patch: Partial<TodosEntity> }>()
);

export const editTodoFailure = createAction(
  '[Todos regular] Edit todo failure'
);

export const removeTodo = createAction(
  '[Todos regular] Remove todo',
  props<{ todo: TodosEntity }>()
);

export const removeTodoSuccess = createAction(
  '[Todos regular] Remove todo success',
  props<{ todo: TodosEntity }>()
);

export const removeTodoError = createAction(
  '[Todos regular] Remove todo success'
);

export const toggleDone = createAction(
  '[Todos regular] Toggle done',
  props<{ todo: TodosEntity }>()
);
