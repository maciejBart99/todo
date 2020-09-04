import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoRegularDataAccessNgrxModule } from '@todo-application/todo/regular/data-access-ngrx';
import { TodoUiModule } from '@todo-application/todo/ui';
import { RouterModule } from '@angular/router';
import { TodoRegularDataAccessCachedModule } from '@todo-application/todo/regular/data-access-cached';

@NgModule({
  imports: [CommonModule,
    TodoRegularDataAccessCachedModule,
    TodoRegularDataAccessNgrxModule,
    TodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),],
  declarations: [TodoCrudComponent]
})
export class TodoRegularFeatureMobileModule {}
