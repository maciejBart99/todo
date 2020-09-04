import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap, toArray } from 'rxjs/operators';
import { TodoDataService } from '@todo-application/todo/regular/util-abstract-data-service';
import { TodosEntity } from '@todo-application/todo/domain';

@Injectable()
export class TodoLocalStorageService implements TodoDataService {

  protected featureKey = 'todos-regular';

  getAllTodos(userId: string): Observable<TodosEntity[]> {
    return of(localStorage.getItem(this.getFeatureKey(userId))).pipe(
      map((ser) => {
        return ser ? (JSON.parse(ser) as TodosEntity[]) : [];
      })
    );
  }

  addTodo(userId: string, newTodo: TodosEntity): Observable<any> {
    return this.getAllTodos(userId).pipe(
      map((all) => {
        all.push(newTodo);
        return all;
      }),
      tap((all) => this.saveTodos(userId, all))
    );
  }

  editTodo(userId :string, entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.getAllTodos(userId).pipe(
      map((all) => [
        ...all.filter((todo) => todo.id !== entity.id),
        { ...entity, ...patch },
      ]),
      tap((all) => this.saveTodos(userId, all))
    );
  }

  removeTodo(userId: string, entity: TodosEntity): Observable<any> {
    return this.getAllTodos(userId).pipe(
      switchMap((all) =>
        from(all).pipe(
          filter((item) => item.id !== entity.id),
          toArray()
        )
      ),
      tap((all) => this.saveTodos(userId, all))
    );
  }

  protected saveTodos(userId: string, todos: TodosEntity[]): void {
    localStorage.setItem(this.getFeatureKey(userId), JSON.stringify(todos));
  }

  protected getFeatureKey(userId: string): string {
    return userId ? `${this.featureKey}-${userId}` : this.featureKey;
  }
}

