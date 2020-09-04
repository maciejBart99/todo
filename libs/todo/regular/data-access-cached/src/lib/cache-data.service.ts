import { Injectable } from '@angular/core';
import { TodoLocalStorageService } from './todo-local-storage.service';
import { UserModel } from '@todo-application/shared/domain';
import { Observable } from 'rxjs';
import { TodosEntity } from '@todo-application/todo/domain';
import { TodoRestService } from '@todo-application/todo/regular/data-access-http';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheDataService extends TodoLocalStorageService {
  getAllTodos(user: UserModel): Observable<TodosEntity[]> {
    if (localStorage.getItem(this.getFeatureKey(user)) == null) {
      return this.restService.getAllTodos(user).pipe(tap(ls => super.saveTodos(user, ls)));
    } else {
      return super.getAllTodos(user);
    }
  }

  constructor(private restService: TodoRestService) {
    super();
  }
}

