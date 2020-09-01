import { from, Observable, of } from 'rxjs';
import { TodosEntity } from '@todo-application/todo/data-access';
import { filter, map, switchMap, tap, toArray } from 'rxjs/operators';

export abstract class TodoDataService {

  abstract getAllTodos(): Observable<TodosEntity[]>

  abstract addTodo(newTodo: TodosEntity)

  abstract editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any>

  abstract removeTodo(entity: TodosEntity): Observable<any>
}
