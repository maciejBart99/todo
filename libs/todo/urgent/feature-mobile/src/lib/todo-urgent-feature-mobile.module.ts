import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoUrgentDataAccessNgrxModule } from '@todo-application/todo/urgent/data-access-ngrx';
import { SharedUiModule } from '@todo-application/shared/ui';
import { RouterModule } from '@angular/router';
import { TodoUrgentDataAccessCachedModule } from '@todo-application/todo/urgent/data-access-cached';
import {
  TodoCrudComponent,
  TodoUrgentFeatureTodoModule,
} from '@todo-application/todo/urgent/feature-todo';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessCachedModule,
    TodoUrgentDataAccessNgrxModule,
    SharedUiModule,
    TodoUrgentFeatureTodoModule,
    RouterModule.forChild([
      { path: '', component: TodoCrudComponent, pathMatch: 'full' },
    ]),
  ],
})
export class TodoUrgentFeatureMobileModule {}
