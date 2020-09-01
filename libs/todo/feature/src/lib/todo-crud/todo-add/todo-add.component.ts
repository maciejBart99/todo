import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosEntity } from '@todo-application/todo/data-access';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'todo-application-todo-add',
  templateUrl: './todo-add.component.html'
})
export class TodoAddComponent {
  @Output() add: EventEmitter<TodosEntity> = new EventEmitter<TodosEntity>();

  addTodo(content: string): void {
    this.add.emit({content: content, id: UUID.UUID(), done: false})
  }
}
