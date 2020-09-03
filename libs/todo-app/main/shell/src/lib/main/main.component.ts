import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@todo-application/todo-app/shared/domain';
import { AuthFacadeService } from '@todo-application/todo-app/auth/public';

@Component({
  selector: 'todo-application-todo-app',
  templateUrl: './main.component.html'
})
export class MainComponent {
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
