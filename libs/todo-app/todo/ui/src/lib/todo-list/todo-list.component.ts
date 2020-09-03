import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodosEntity } from '@todo-application/todo-app/todo/domain';

@Component({
  selector: 'todo-application-todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: TodosEntity[];
  @Output() toggledDone: EventEmitter<TodosEntity> = new EventEmitter<TodosEntity>();
  @Output() removeTodo: EventEmitter<TodosEntity> = new EventEmitter<TodosEntity>();
  @Output() editTodo: EventEmitter<{ patch: Partial<TodosEntity>, todo: TodosEntity }> = new EventEmitter<{ patch: Partial<TodosEntity>, todo: TodosEntity }>();
}


