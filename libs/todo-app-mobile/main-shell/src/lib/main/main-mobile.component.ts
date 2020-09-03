import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@todo-application/shared/domain';
import { AuthFacadeService } from '@todo-application/auth/public';

@Component({
  selector: 'todo-application-todo-app',
  templateUrl: './main-mobile.component.html'
})
export class MainMobileComponent {
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
