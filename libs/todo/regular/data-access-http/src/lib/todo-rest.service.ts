import { Injectable } from '@angular/core';
import { TodoDataService } from '@todo-application/todo/regular/util-abstract-data-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodosEntity } from '@todo-application/todo/domain';
import { UserModel } from '@todo-application/shared/domain';

@Injectable()
export class TodoRestService implements TodoDataService {

  private readonly resourceUrl = 'todos-regular';

  constructor(private http: HttpClient) {}

  getAllTodos(user: UserModel): Observable<TodosEntity[]> {
      return this.http.get<TodosEntity[]>(this.getResourceUrlBase(user));
  }
  addTodo(user: UserModel, newTodo: TodosEntity) {
    return this.http.post<TodosEntity>(this.getResourceUrlBase(user), {...newTodo, ownerId: user?.id});
  }
  editTodo(user: UserModel, entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.http.patch<TodosEntity>(`${this.getResourceUrlBase(user)}/${entity.id}`, patch);
  }
  removeTodo(user: UserModel, entity: TodosEntity): Observable<any> {
    return this.http.delete<{}>(`${this.getResourceUrlBase(user)}/${entity.id}`);
  }

  private getResourceUrlBase(user: UserModel): string{
      if (user) return `user/${user.id}/${this.resourceUrl}`;
      else return this.resourceUrl;
  }
}
