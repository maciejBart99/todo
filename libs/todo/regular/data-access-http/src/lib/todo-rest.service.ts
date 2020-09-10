import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodoDataService, TodosEntity } from '@todo-application/todo/domain';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoRestService implements TodoDataService {
  private readonly resourceUrl = 'todos-regular';

  constructor(private http: HttpClient) {}

  getAllTodos(userId: string): Observable<TodosEntity[]> {
    return this.http
      .get<TodosEntity[]>(this.getResourceUrlBase(userId))
      .pipe(delay(2000));
  }

  addTodo(userId: string, newTodo: TodosEntity) {
    return this.http.post<TodosEntity>(this.getResourceUrlBase(userId), {
      ...newTodo,
      ownerId: userId,
    });
  }

  editTodo(
    userId: string,
    entity: TodosEntity,
    patch: Partial<TodosEntity>
  ): Observable<any> {
    return this.http.patch<TodosEntity>(
      `${this.getResourceUrlBase(userId)}/${entity.id}`,
      patch
    );
  }

  removeTodo(userId: string, entity: TodosEntity): Observable<any> {
    return this.http.delete<{}>(
      `${this.getResourceUrlBase(userId)}/${entity.id}`
    );
  }

  private getResourceUrlBase(userId: string): string {
    if (userId) return `user/${userId}/${this.resourceUrl}`;
    else return this.resourceUrl;
  }
}
