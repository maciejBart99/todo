import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '@todo-application/shared/domain';

@Component({
  selector: 'todo-application-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  @Input() user: UserModel;
}
