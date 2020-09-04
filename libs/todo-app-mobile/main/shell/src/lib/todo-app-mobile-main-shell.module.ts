import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMobileComponent } from './main/main-mobile.component';
import { SharedUiHeaderModule } from '@todo-application/shared/ui-header';
import { AuthUiUserBarModule } from '@todo-application/auth/ui-user-bar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TodoShellMobileModule } from '@todo-application/todo/shell-mobile';
import { AuthPublicModule } from '@todo-application/auth/public';
import { AuthShellModule } from '@todo-application/auth/shell';

@NgModule({
  imports: [AuthPublicModule,
    SharedUiHeaderModule,
    MatButtonModule,
    MatMenuModule,
    AuthShellModule,
    MatIconModule,
    AuthUiUserBarModule,
    RouterModule,
    TodoShellMobileModule, CommonModule],
  declarations: [MainMobileComponent],
  exports: [MainMobileComponent]
})
export class TodoAppMobileMainShellModule {}
