import {  Observable } from 'rxjs';
import { TodosEntity } from '@todo-application/todo/domain';
import { UserModel } from '@todo-application/shared/domain';

export abstract class TodoDataService {

  abstract getAllTodos(user: UserModel): Observable<TodosEntity[]>

  abstract addTodo(user: UserModel, newTodo: TodosEntity)

  abstract editTodo(user: UserModel, entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any>

  abstract removeTodo(user: UserModel, entity: TodosEntity): Observable<any>
}
