import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodosEntity, TodosFacade } from '@todo-application/todo/data-access';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'todo-application-todo-crud',
  templateUrl: './todo-crud.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCrudComponent implements OnInit, OnDestroy {

  constructor(private todoFacade: TodosFacade) {
    this.todosDone$ = todoFacade.allDone$;
    this.todosNotDone$ = todoFacade.allNotDone$;
    this.selectTodo$ = todoFacade.selectedTodos$;
    this.loaded$ = todoFacade.loaded$;
  }

  currentTodo: TodosEntity;
  loaded$: Observable<boolean>;
  todosDone$: Observable<TodosEntity[]>;
  todosNotDone$: Observable<TodosEntity[]>;
  selectTodo$: Observable<TodosEntity>;

  private selectSubscription: Subscription;

  ngOnInit(): void {
    this.todoFacade.loadTodos();

    this.selectSubscription = this.selectTodo$.subscribe(
      current => {
        this.currentTodo = current;
      }
    );
  }

  ngOnDestroy(): void {
    this.selectSubscription.unsubscribe();
  }

  todoSelected(todo: TodosEntity) {
    this.todoFacade.selectTodo(todo);
  }

  toggleTodoDone(todo: TodosEntity): void {
    this.todoFacade.toggleTodoDone(todo);
  }

  openAddForm(): void {
    this.todoFacade.selectTodo(null);
  }

  addTodo(todo: TodosEntity): void {
    this.todoFacade.addTodo(todo);
  }

  removeCurrent(): void {
    this.todoFacade.removeCurrentTodo();
  }

  editCurrent(patch: Partial<TodosEntity>): void {
    this.todoFacade.editCurrentTodo(patch);
  }

}
