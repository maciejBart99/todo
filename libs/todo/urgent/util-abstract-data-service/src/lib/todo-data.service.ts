import {  Observable } from 'rxjs';
import { TodosEntity } from '@todo-application/todo/domain';

export abstract class TodoDataService {

  abstract getAllTodos(userId: string): Observable<TodosEntity[]>

  abstract addTodo(userId: string, newTodo: TodosEntity)

  abstract editTodo(userId: string, entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any>

  abstract removeTodo(userId: string, entity: TodosEntity): Observable<any>
}
