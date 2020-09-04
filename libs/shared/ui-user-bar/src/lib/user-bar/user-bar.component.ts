import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-application-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  @Input() userName: string;
  @Output() logIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() logOut: EventEmitter<void> = new EventEmitter<void>();
}
