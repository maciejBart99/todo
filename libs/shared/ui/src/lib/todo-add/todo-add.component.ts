import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { FormControl } from '@angular/forms';
import { TodosEntity } from '@todo-application/todo/domain';

@Component({
  selector: 'todo-application-todo-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {
  @Output() add: EventEmitter<TodosEntity> = new EventEmitter<TodosEntity>();

  control = new FormControl('');

  addTodo(): void {
    this.add.emit({
      content: this.control.value,
      id: UUID.UUID(),
      done: false,
    });
    this.control.reset();
  }
}
