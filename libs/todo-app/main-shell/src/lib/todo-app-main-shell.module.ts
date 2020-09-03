import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoShellModule } from '@todo-application/todo/shell';
import { AuthShellModule } from '@todo-application/auth/shell';
import { MainComponent } from './main/main.component';
import { SharedUiHeaderModule } from '@todo-application/shared/ui-header';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedUiUserBarModule } from '@todo-application/shared/ui-user-bar';

@NgModule({
  imports: [CommonModule,
    TodoShellModule,
    AuthShellModule,
    SharedUiHeaderModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    SharedUiUserBarModule,
    RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class TodoAppMainShellModule {}
