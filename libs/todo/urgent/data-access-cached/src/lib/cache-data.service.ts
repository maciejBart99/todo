import { Injectable } from '@angular/core';
import { TodoLocalStorageService } from './todo-local-storage.service';
import { Observable } from 'rxjs';
import { TodosEntity } from '@todo-application/todo/domain';
import { TodoRestService } from '@todo-application/todo/urgent/data-access-http';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheDataService extends TodoLocalStorageService {
  getAllTodos(userId: string): Observable<TodosEntity[]> {
    if (localStorage.getItem(this.featureKey) == null) {
      return this.restService
        .getAllTodos(userId)
        .pipe(tap((ls) => super.saveTodos(userId, ls)));
    } else {
      return super.getAllTodos(userId);
    }
  }

  constructor(private restService: TodoRestService) {
    super();
  }
}
