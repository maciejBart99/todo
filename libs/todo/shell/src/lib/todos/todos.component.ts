import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from '@todo-application/auth/public';
import { UserModel } from '@todo-application/shared/domain';

@Component({
  selector: 'todo-application-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  user: UserModel;

  constructor(private authFacade: AuthFacadeService) {
    this.user = authFacade.getCurrentUser();
  }
}
