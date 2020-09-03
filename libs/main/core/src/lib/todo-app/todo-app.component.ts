import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@todo-application/shared/domain';
import { AuthFacadeService } from '@todo-application/auth/public';

@Component({
  selector: 'todo-application-todo-app',
  templateUrl: './todo-app.component.html'
})
export class TodoAppComponent {
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
