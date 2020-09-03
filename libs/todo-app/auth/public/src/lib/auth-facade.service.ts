import { Injectable } from '@angular/core';
import { UserModel } from '@todo-application/todo-app/shared/domain';
import { AuthFacade } from '@todo-application/todo-app/auth/data-access';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private userService: AuthFacade) { }

  getCurrentUser(): Observable<UserModel> {
    return this.userService.user$;
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.getCurrentUser().pipe(map(user => user != null));
  }

  logIn(): void {
    this.userService.logIn({
      id: 'xxx',
      firstName: 'Maciej',
      lastName: 'Lukasik'
    });
  }

  logOut(): void {
    this.userService.logOut();
  }
}
