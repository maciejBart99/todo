import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoHeaderComponent],
  exports: [TodoHeaderComponent]
})
export class TodoAppSharedUiHeaderModule {}
