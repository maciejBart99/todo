import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoUiModule } from '@todo-application/todo/ui';
import { TodoRegularDataAccessNgrxModule } from '@todo-application/todo/regular/data-access-ngrx';
import { TodoRegularDataAccessHttpModule } from '@todo-application/todo/regular/data-access-http';

@NgModule({
  imports: [
    CommonModule,
    TodoRegularDataAccessNgrxModule,
    TodoRegularDataAccessHttpModule.asMainProvider(),
    TodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoRegularFeatureWebModule {}
