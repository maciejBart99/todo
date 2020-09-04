import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoUiModule } from '@todo-application/todo/ui';
import { TodoUrgentDataAccessNgrxModule } from '@todo-application/todo/urgent/data-access-ngrx';
import { TodoUrgentDataAccessHttpModule } from '@todo-application/todo/urgent/data-access-http';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessHttpModule.asMainProvider(),
    TodoUrgentDataAccessNgrxModule,
    TodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoUrgentFeatureWebModule {}
