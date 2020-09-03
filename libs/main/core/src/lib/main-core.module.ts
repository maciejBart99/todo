import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TodoShellModule, todoShellRoutes } from '@todo-application/todo/shell';
import { AuthShellModule } from '@todo-application/auth/shell';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoAppComponent } from './todo-app/todo-app.component';
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
    RouterModule.forChild([])],
  declarations: [TodoAppComponent],
  exports: [TodoAppComponent]
})
export class MainCoreModule {}
