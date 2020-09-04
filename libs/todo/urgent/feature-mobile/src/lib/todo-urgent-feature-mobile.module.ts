import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoUrgentDataAccessNgrxModule } from '@todo-application/todo/urgent/data-access-ngrx';
import { TodoUiModule } from '@todo-application/todo/ui';
import { RouterModule } from '@angular/router';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoUrgentDataAccessCachedModule } from '@todo-application/todo/urgent/data-access-cached';

@NgModule({
  imports: [
    CommonModule,
    TodoUrgentDataAccessCachedModule,
    TodoUrgentDataAccessNgrxModule,
    TodoUiModule,
    RouterModule.forChild([
      {path: '', component: TodoCrudComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [TodoCrudComponent],
  exports: [TodoCrudComponent]
})
export class TodoUrgentFeatureMobileModule {}
