import { Injectable } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodosEntity } from '@todo-application/todo/domain';
import { AuthFacadeService } from '@todo-application/auth/public';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class TodoRestService implements TodoDataService {

  private readonly resourceUrl = 'todos-regular';

  constructor(private http: HttpClient, private authService: AuthFacadeService) {}

  getAllTodos(): Observable<TodosEntity[]> {
      return this.getResourceUrlBase().pipe(switchMap(url => this.http.get<TodosEntity[]>(url)));
  }
  addTodo(newTodo: TodosEntity) {
    return this.getResourceUrlBase().pipe(withLatestFrom(this.authService.getCurrentUser()),
      switchMap(([url, user]) => this.http.post<TodosEntity>(url, {...newTodo, ownerId: user?.id})));
  }
  editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.getResourceUrlBase().pipe(switchMap(url => this.http.patch<TodosEntity>(`${url}/${entity.id}`, patch)));
  }
  removeTodo(entity: TodosEntity): Observable<any> {
    return this.getResourceUrlBase().pipe(switchMap(url => this.http.delete<{}>(`${url}/${entity.id}`)));
  }

  private getResourceUrlBase(): Observable<string> {
    return this.authService.getCurrentUser().pipe(take(1),
      map(user => {
      if (user) return `user/${user.id}/${this.resourceUrl}`;
      else return this.resourceUrl;
    }))
  }
}
