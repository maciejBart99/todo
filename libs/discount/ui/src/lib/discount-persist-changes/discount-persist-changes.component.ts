import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-application-discount-persist-changes',
  templateUrl: './discount-persist-changes.component.html'
})
export class DiscountPersistChangesComponent  {
  @Output() persist: EventEmitter<void> = new EventEmitter<void>();
}
