import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoPreviewItemComponent } from './todo-list/todo-preview-item/todo-preview-item.component';
import { TodoLoadingComponent } from './todo-loading/todo-loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    AutosizeModule,
  ],
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoPreviewItemComponent,
    TodoLoadingComponent,
  ],
  exports: [
    TodoListComponent,
    TodoAddComponent,
    TodoPreviewItemComponent,
    TodoLoadingComponent,
  ],
})
export class SharedUiModule {}
