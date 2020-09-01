import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodosEntity, TodosFacade } from '@todo-application/todo/data-access';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'todo-application-todo-crud',
  templateUrl: './todo-crud.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCrudComponent implements OnInit {

  constructor(private todoFacade: TodosFacade) {
    this.todosDone$ = todoFacade.allDone$;
    this.todosNotDone$ = todoFacade.allNotDone$;
    this.loaded$ = todoFacade.loaded$;
  }

  loaded$: Observable<boolean>;
  todosDone$: Observable<TodosEntity[]>;
  todosNotDone$: Observable<TodosEntity[]>;

  ngOnInit(): void {
    this.todoFacade.loadTodos();
  }

  toggleTodoDone(todo: TodosEntity): void {
    this.todoFacade.toggleTodoDone(todo);
  }

  addTodo(todo: TodosEntity): void {
    this.todoFacade.addTodo(todo);
  }

  removeTodo(todo: TodosEntity): void {
    this.todoFacade.removeTodo(todo);
  }

  editTodo(patch: Partial<TodosEntity>, todo: TodosEntity): void {
    this.todoFacade.editTodo(todo, patch);
  }

}
