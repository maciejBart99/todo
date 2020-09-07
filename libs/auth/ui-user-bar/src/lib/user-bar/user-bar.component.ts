import { Component } from '@angular/core';
import { AuthFacade, UserModel } from '@todo-application/auth/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-application-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent {
  user$: Observable<UserModel>;

  constructor(private authFacade: AuthFacade) {
    this.user$ = authFacade.user$;
  }

  logIn(): void {
    this.authFacade.logIn({
      id: 'xxx',
      firstName: 'Maciej',
      lastName: 'Lukasik'
    });
  }
  logOut(): void {
    this.authFacade.logOut();
  }

}
