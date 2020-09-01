import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDataAccessModule } from '@todo-application/todo/data-access';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { TodoListComponent } from './todo-crud/todo-list/todo-list.component';
import { TodoAddComponent } from './todo-crud/todo-add/todo-add.component';
import { TodoPreviewItemComponent } from './todo-crud/todo-list/todo-preview-item/todo-preview-item.component';
import { MatListModule } from '@angular/material/list';
import { TodoEditComponent } from './todo-crud/todo-edit/todo-edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoHeaderComponent } from './todo-crud/todo-header/todo-header.component';
import { TodoLoadingComponent } from './todo-crud/todo-loading/todo-loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [CommonModule,
    TodoDataAccessModule, MatListModule, MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCheckboxModule, MatProgressSpinnerModule],
  declarations: [TodoCrudComponent, TodoListComponent, TodoAddComponent, TodoPreviewItemComponent, TodoEditComponent, TodoHeaderComponent, TodoLoadingComponent],
  exports: [TodoCrudComponent]
})
export class TodoFeatureModule {}
