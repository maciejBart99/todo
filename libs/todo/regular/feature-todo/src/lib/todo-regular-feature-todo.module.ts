import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoUiModule } from '@todo-application/todo/ui';

@NgModule({
  imports: [CommonModule, TodoUiModule],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent],
})
export class TodoRegularFeatureTodoModule {}
