import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoAppTodoUiModule } from '@todo-application/todo-app/todo/ui';
import { TodoAppTodoRegularDataAccessModule } from '@todo-application/todo-app/todo/regular/data-access';

@NgModule({
  imports: [
    CommonModule,
    TodoAppTodoRegularDataAccessModule,
    TodoAppTodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoAppTodoRegularFeatureModule {}
