import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoHeaderComponent } from './todos/todo-header/todo-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedUiUserBarModule } from '@todo-application/shared/ui-user-bar';

export const todoShellRoutes: Route[] = [
  {path: 'todo/regular', loadChildren: () => import('@todo-application/todo/regular/feature').then(m => m.TodoRegularFeatureModule)},
  {path: 'todo/urgent', loadChildren: () => import('@todo-application/todo/urgent/feature').then(m => m.TodoUrgentFeatureModule)},
  {path: '**', redirectTo: 'todo/regular'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(todoShellRoutes), MatButtonModule, MatMenuModule, MatIconModule, SharedUiUserBarModule],
  declarations: [TodosComponent, TodoHeaderComponent],
  exports: [TodosComponent]
})
export class TodoShellModule {}
