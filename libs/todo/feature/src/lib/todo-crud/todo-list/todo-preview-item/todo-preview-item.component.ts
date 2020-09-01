import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosEntity } from '@todo-application/todo/data-access';

@Component({
  selector: 'todo-application-todo-preview-item',
  templateUrl: './todo-preview-item.component.html',
  styleUrls: ['./todo-preview-item.component.scss.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPreviewItemComponent {
  @Input() todo: TodosEntity;
  @Output() toggledDone: EventEmitter<void> = new EventEmitter<void>();
}
