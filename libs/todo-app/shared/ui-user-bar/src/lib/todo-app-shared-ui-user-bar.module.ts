import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar/user-bar.component';
import { TodoNavComponent } from './user-bar/todo-nav/todo-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, RouterModule, MatIconModule],
  declarations: [UserBarComponent, TodoNavComponent],
  exports: [UserBarComponent]
})
export class TodoAppSharedUiUserBarModule {}
