import { Injectable } from '@angular/core';
import { UserService } from '@todo-application/auth/data-access';
import { UserModel } from '@todo-application/shared/domain';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private userService: UserService) { }

  getCurrentUser(): UserModel {
    return this.userService.getUser();
  }

  getIsAuthenticated(): boolean {
    return this.getCurrentUser() != null;
  }
}
