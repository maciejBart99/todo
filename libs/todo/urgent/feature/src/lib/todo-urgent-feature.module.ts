import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoUiModule } from '@todo-application/todo/ui';
import { TodoUrgentDataAccessModule } from '@todo-application/todo/urgent/data-access';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessModule,
    TodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoUrgentFeatureModule {}
