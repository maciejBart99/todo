import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '@todo-application/auth/domain';

@Component({
  selector: 'todo-application-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent {
  @Input() user: UserModel;
  @Output() logIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() logOut: EventEmitter<void> = new EventEmitter<void>();
}
