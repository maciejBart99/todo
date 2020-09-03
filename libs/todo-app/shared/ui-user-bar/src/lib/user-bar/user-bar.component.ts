import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '@todo-application/todo-app/shared/domain';

@Component({
  selector: 'todo-application-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  @Input() user: UserModel;
  @Output() logIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() logOut: EventEmitter<void> = new EventEmitter<void>();
}
