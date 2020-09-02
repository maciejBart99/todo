import { Injectable } from '@angular/core';
import { UserModel } from '@todo-application/shared/domain';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): UserModel {
    return {
      firstName: 'Maciej',
      lastName: 'Lukasik',
      id: 'xxx'
    }
  }
}

