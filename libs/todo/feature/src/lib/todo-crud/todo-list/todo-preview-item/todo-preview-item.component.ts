import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { TodosEntity } from '@todo-application/todo/data-access';

@Component({
  selector: 'todo-application-todo-preview-item',
  templateUrl: './todo-preview-item.component.html',
  styleUrls: ['./todo-preview-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPreviewItemComponent {
  @Input() todo: TodosEntity;
  @Output() toggledDone: EventEmitter<void> = new EventEmitter<void>();
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  @Output() edit: EventEmitter<Partial<TodosEntity>> = new EventEmitter<Partial<TodosEntity>>();

  saveEdit(content: string): void {
    if (content.trim() === '') {
      this.remove.emit();
    } else {
      this.edit.emit({ content: content });
    }
  }
}
