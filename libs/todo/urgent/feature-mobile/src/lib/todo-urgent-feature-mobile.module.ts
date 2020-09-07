import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoUrgentDataAccessNgrxModule } from '@todo-application/todo/urgent/data-access-ngrx';
import { TodoUiModule } from '@todo-application/todo/ui';
import { RouterModule } from '@angular/router';
import { TodoUrgentDataAccessCachedModule } from '@todo-application/todo/urgent/data-access-cached';
import { TodoCrudComponent, TodoUrgentFeatureTodoModule } from '@todo-application/todo/urgent/feature-todo';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessCachedModule,
    TodoUrgentDataAccessNgrxModule,
    TodoUiModule,
    TodoUrgentFeatureTodoModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ]
})
export class TodoUrgentFeatureMobileModule {}
