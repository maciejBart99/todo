import { Observable } from 'rxjs';
import { UserModel } from './user.model';

export abstract class AuthFacade {
  abstract user$: Observable<UserModel>;

  abstract logIn(user: UserModel): void;

  abstract logOut(): void;
}
