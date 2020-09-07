import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthFacade } from '@todo-application/auth/domain';

@Injectable()
export class PublicAuthFacadeService {

  constructor(private userService: AuthFacade) { }

  getCurrentUser(): Observable<string> {
    return this.userService.user$.pipe(map(el => el ? `${el.firstName} ${el.lastName}` : null));
  }

  getCurrentUserId(): Observable<string> {
    return this.userService.user$.pipe(map(el => el ? el.id : null));
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.userService.user$.pipe(map(user => user != null));
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
