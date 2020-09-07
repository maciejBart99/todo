import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFacade, UserModel } from '@todo-application/auth/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-application-user-login-button',
  templateUrl: './user-login-button.component.html',
})
export class UserLoginButtonComponent {
  user$: Observable<UserModel>;

  constructor(private authFacade: AuthFacade) {
    this.user$ = authFacade.user$;
  }

  logIn(): void {
    this.authFacade.logIn({
      id: 'xxx',
      firstName: 'Maciej',
      lastName: 'Lukasik',
    });
  }

  logOut(): void {
    this.authFacade.logOut();
  }
}
