import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const todoShellRoutes: Route[] = [
  {path: 'todo', component: TodosComponent, children: [
    {path: 'regular', loadChildren: () => import('@todo-application/todo/regular/feature').then(m => m.TodoRegularFeatureModule)},
    {path: 'urgent', loadChildren: () => import('@todo-application/todo/urgent/feature').then(m => m.TodoUrgentFeatureModule)},
    {path: '**', redirectTo: 'regular'}
  ]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(todoShellRoutes)],
  declarations: [TodosComponent],
  exports: [TodosComponent]
})
export class TodoShellModule {}
