import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoUiModule } from '@todo-application/todo/ui';
import { TodoRegularDataAccessNgrxModule } from '@todo-application/todo/regular/data-access-ngrx';
import { TodoRegularDataAccessHttpModule } from '@todo-application/todo/regular/data-access-http';
import {
  TodoCrudComponent,
  TodoRegularFeatureTodoModule,
} from '@todo-application/todo/regular/feature-todo';

@NgModule({
  imports: [
    CommonModule,
    TodoRegularDataAccessNgrxModule,
    TodoRegularDataAccessHttpModule.asMainProvider(),
    TodoRegularFeatureTodoModule,
    TodoUiModule,
    RouterModule.forChild([
      { path: '', component: TodoCrudComponent, pathMatch: 'full' },
    ]),
  ],
})
export class TodoRegularFeatureWebModule {}
