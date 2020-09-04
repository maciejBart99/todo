import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicAuthFacadeService } from '@todo-application/auth/public';

@Component({
  selector: 'todo-application-todo-app',
  templateUrl: './main.component.html'
})
export class MainComponent {
  userName$: Observable<string>;

  constructor(private authFacade: PublicAuthFacadeService) {
    this.userName$ = authFacade.getCurrentUser();
  }

  logIn(): void {
    this.authFacade.logIn();
  }

  logOut(): void {
    this.authFacade.logOut();
  }
}
