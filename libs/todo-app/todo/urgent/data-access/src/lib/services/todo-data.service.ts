import {  Observable } from 'rxjs';
import { TodosEntity } from '@todo-application/todo-app/todo/domain';

export abstract class TodoDataService {

  abstract getAllTodos(): Observable<TodosEntity[]>

  abstract addTodo(newTodo: TodosEntity)

  abstract editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any>

  abstract removeTodo(entity: TodosEntity): Observable<any>
}
