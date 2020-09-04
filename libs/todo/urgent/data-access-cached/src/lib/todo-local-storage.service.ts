import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap, toArray } from 'rxjs/operators';
import { TodoDataService } from '@todo-application/todo/regular/util-abstract-data-service';
import { TodosEntity } from '@todo-application/todo/domain';
import { UserModel } from '@todo-application/shared/domain';

@Injectable()
export class TodoLocalStorageService implements TodoDataService {

  protected featureKey = 'todos-urgent';

  getAllTodos(user: UserModel): Observable<TodosEntity[]> {
    return of(localStorage.getItem(this.getFeatureKey(user))).pipe(
      map((ser) => {
        return ser ? (JSON.parse(ser) as TodosEntity[]) : [];
      })
    );
  }

  addTodo(user: UserModel, newTodo: TodosEntity): Observable<any> {
    return this.getAllTodos(user).pipe(
      map((all) => {
        all.push(newTodo);
        return all;
      }),
      tap((all) => this.saveTodos(user, all))
    );
  }

  editTodo(user: UserModel, entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.getAllTodos(user).pipe(
      map((all) => [
        ...all.filter((todo) => todo.id !== entity.id),
        { ...entity, ...patch },
      ]),
      tap((all) => this.saveTodos(user, all))
    );
  }

  removeTodo(user: UserModel, entity: TodosEntity): Observable<any> {
    return this.getAllTodos(user).pipe(
      switchMap((all) =>
        from(all).pipe(
          filter((item) => item.id !== entity.id),
          toArray()
        )
      ),
      tap((all) => this.saveTodos(user, all))
    );
  }

  protected saveTodos(user: UserModel, todos: TodosEntity[]): void {
    localStorage.setItem(this.getFeatureKey(user), JSON.stringify(todos));
  }

  protected getFeatureKey(user: UserModel): string {
    return user ? `${this.featureKey}-${user.id}` : this.featureKey;
  }
}

