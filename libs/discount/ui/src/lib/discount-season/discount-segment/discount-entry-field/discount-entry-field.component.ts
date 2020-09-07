import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-application-discount-entry-field',
  templateUrl: './discount-entry-field.component.html',
  styleUrls: ['./discount-entry-field.component.scss']
})
export class DiscountEntryFieldComponent {
  @Input() value: string | number;
  @Input() editable: boolean;
  @Output() edit: EventEmitter<string | number> = new EventEmitter<string | number>();
}
