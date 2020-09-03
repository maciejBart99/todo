import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppAuthDataAccessModule } from '@todo-application/todo-app/auth/data-access';

@NgModule({
  imports: [CommonModule, TodoAppAuthDataAccessModule],
})
export class TodoAppAuthShellModule {}
