import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosEntity } from '@todo-application/todo/data-access';

@Component({
  selector: 'todo-application-todo-edit',
  templateUrl: './todo-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditComponent {
  @Input() todo: TodosEntity;
  @Output() edit: EventEmitter<Partial<TodosEntity>> = new EventEmitter<Partial<TodosEntity>>();
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
}

