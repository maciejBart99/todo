import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoAppTodoShellModule } from '@todo-application/todo-app/todo/shell';
import { TodoAppAuthShellModule } from '@todo-application/todo-app/auth/shell';
import { MainComponent } from './main/main.component';
import { TodoAppSharedUiHeaderModule } from '@todo-application/todo-app/shared/ui-header';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TodoAppSharedUiUserBarModule } from '@todo-application/todo-app/shared/ui-user-bar';

@NgModule({
  imports: [CommonModule,
    TodoAppTodoShellModule,
    TodoAppAuthShellModule,
    TodoAppSharedUiHeaderModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TodoAppSharedUiUserBarModule,
    RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class TodoAppMainShellModule {}
