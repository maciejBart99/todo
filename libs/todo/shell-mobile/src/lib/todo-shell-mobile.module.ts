import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const todoShellRoutes: Route[] = [
  {
    path: 'todo',
    component: TodosComponent,
    children: [
      {
        path: 'regular',
        loadChildren: () =>
          import('@todo-application/todo/regular/feature-mobile').then(
            (m) => m.TodoRegularFeatureMobileModule
          ),
      },
      {
        path: 'urgent',
        loadChildren: () =>
          import('@todo-application/todo/urgent/feature-mobile').then(
            (m) => m.TodoUrgentFeatureMobileModule
          ),
      },
      { path: '**', redirectTo: 'regular' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(todoShellRoutes)],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class TodoShellMobileModule {}
