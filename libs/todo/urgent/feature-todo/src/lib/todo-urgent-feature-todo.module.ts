import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { SharedUiModule } from '@todo-application/shared/ui';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent],
})
export class TodoUrgentFeatureTodoModule {}
