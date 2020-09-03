import { Component } from '@angular/core';
import { UserModel } from '@todo-application/shared/domain';
import { AuthFacadeService } from '@todo-application/auth/public';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-application-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  user$: Observable<UserModel>;

  constructor(private authFacade: AuthFacadeService) {
    this.user$ = authFacade.getCurrentUser();
  }

  logIn(): void {
    this.authFacade.logIn();
  }

  logOut(): void {
    this.authFacade.logOut();
  }
}
