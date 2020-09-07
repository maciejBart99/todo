import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@todo-application/shared/ui';
import { TodoUrgentDataAccessNgrxModule } from '@todo-application/todo/urgent/data-access-ngrx';
import { TodoUrgentDataAccessHttpModule } from '@todo-application/todo/urgent/data-access-http';
import {
  TodoCrudComponent,
  TodoUrgentFeatureTodoModule,
} from '@todo-application/todo/urgent/feature-todo';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessHttpModule.asMainProvider(),
    TodoUrgentDataAccessNgrxModule,
    SharedUiModule,
    TodoUrgentFeatureTodoModule,
    RouterModule.forChild([
      { path: '', component: TodoCrudComponent, pathMatch: 'full' },
    ]),
  ],
})
export class TodoUrgentFeatureWebModule {}
