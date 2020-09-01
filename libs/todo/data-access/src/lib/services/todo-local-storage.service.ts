import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap, toArray } from 'rxjs/operators';
import { TodosEntity } from '@todo-application/todo/data-access';

@Injectable({
  providedIn: 'root'
})
export class TodoLocalStorageService {

  private readonly featureKey = 'todos';

  constructor() { }

  getAllTodos(): Observable<TodosEntity[]> {
      return of(localStorage.getItem(this.featureKey)).pipe(
      map(ser => {
        return ser ? JSON.parse(ser) as TodosEntity[] : [];
      }));
  }

  addTodo(newTodo: TodosEntity): Observable<any> {
    return this.getAllTodos().pipe(
      map(all => {
        all.push(newTodo);
        return all;
      }),
      tap(all => this.saveTodos(all))
    );
  }

  editTodo(entity: TodosEntity, patch: Partial<TodosEntity>): Observable<any> {
    return this.getAllTodos().pipe(
      map(all => [...(all.filter(todo => todo.id !== entity.id)), {...entity, ...patch}]),
      tap(all => this.saveTodos(all))
    )
  }

  removeTodo(entity: TodosEntity): Observable<any> {
    return this.getAllTodos().pipe(
      switchMap(all => from(all).pipe(
        filter(item => item.id !== entity.id),
        toArray()
      )),
      tap(all => this.saveTodos(all))
    )
  }

  private saveTodos(todos: TodosEntity[]): void {
    localStorage.setItem(this.featureKey, JSON.stringify(todos));
  }

}
