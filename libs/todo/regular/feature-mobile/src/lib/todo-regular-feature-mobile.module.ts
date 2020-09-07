import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRegularDataAccessNgrxModule } from '@todo-application/todo/regular/data-access-ngrx';
import { SharedUiModule } from '@todo-application/shared/ui';
import { RouterModule } from '@angular/router';
import { TodoRegularDataAccessCachedModule } from '@todo-application/todo/regular/data-access-cached';
import {
  TodoCrudComponent,
  TodoRegularFeatureTodoModule,
} from '@todo-application/todo/regular/feature-todo';

@NgModule({
  imports: [
    CommonModule,
    TodoRegularDataAccessCachedModule,
    TodoRegularDataAccessNgrxModule,
    SharedUiModule,
    TodoRegularFeatureTodoModule,
    RouterModule.forChild([
      { path: '', component: TodoCrudComponent, pathMatch: 'full' },
    ]),
  ],
})
export class TodoRegularFeatureMobileModule {}
