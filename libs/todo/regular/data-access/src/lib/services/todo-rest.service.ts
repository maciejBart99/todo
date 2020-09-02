import { Injectable } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodosEntity } from '@todo-application/todo/domain';

@Injectable()
export class TodoRestService implements TodoDataService {

  private readonly resourceUrl = 'todos-regular';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<TodosEntity[]> {
      return this.http.get<TodosEntity[]>(this.resourceUrl);
  }
  addTodo(newTodo: TodosEntity) {
      return this.http.post<TodosEntity>(this.resourceUrl, newTodo);
  }
  editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.http.patch<TodosEntity>(`${this.resourceUrl}/${entity.id}`, patch);
  }
  removeTodo(entity: TodosEntity): Observable<any> {
    return this.http.delete<{}>(`${this.resourceUrl}/${entity.id}`);
  }
}
