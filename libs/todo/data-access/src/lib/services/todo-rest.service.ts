import { Injectable } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs';
import { TodosEntity } from '../+state/todos.models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoRestService implements TodoDataService {

  private readonly resourceUrl = 'todos';
  private readonly headers = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<TodosEntity[]> {
      return this.http.get<TodosEntity[]>(this.resourceUrl);
  }
  addTodo(newTodo: TodosEntity) {
      return this.http.post<any>(this.resourceUrl, newTodo, {headers: this.headers});
  }
  editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.http.patch<any>(`${this.resourceUrl}/${entity.id}`, patch, {headers: this.headers});
  }
  removeTodo(entity: TodosEntity): Observable<any> {
    return this.http.delete<any>(`${this.resourceUrl}/${entity.id}`, {headers: this.headers});
  }
}
