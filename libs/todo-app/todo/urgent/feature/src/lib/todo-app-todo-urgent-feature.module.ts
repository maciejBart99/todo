import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoAppTodoUiModule } from '@todo-application/todo-app/todo/ui';
import { TodoAppTodoUrgentDataAccessModule } from '@todo-application/todo-app/todo/urgent/data-access';

@NgModule({
  imports: [
    CommonModule,
    TodoAppTodoUrgentDataAccessModule,
    TodoAppTodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoAppTodoUrgentFeatureModule {}
