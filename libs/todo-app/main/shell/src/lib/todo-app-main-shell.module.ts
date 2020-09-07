import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoShellWebModule } from '@todo-application/todo/shell-web';
import { AuthShellModule } from '@todo-application/auth/shell';
import { MainComponent } from './main/main.component';
import { SharedUiHeaderModule } from '@todo-application/shared/ui-header';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthUiUserBarModule } from '@todo-application/auth/ui-user-bar';
import { AuthPublicModule } from '@todo-application/auth/public';

@NgModule({
  imports: [CommonModule,
    TodoShellWebModule,
    AuthPublicModule,
    AuthShellModule,
    SharedUiHeaderModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AuthUiUserBarModule,
    RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class TodoAppMainShellModule {}
