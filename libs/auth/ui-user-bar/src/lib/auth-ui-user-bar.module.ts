import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar/user-bar.component';
import { TodoNavComponent } from './user-bar/todo-nav/todo-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserLoginComponent } from './user-bar/user-login/user-login.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, RouterModule, MatIconModule],
  declarations: [UserBarComponent, TodoNavComponent, UserLoginComponent],
  exports: [UserBarComponent]
})
export class AuthUiUserBarModule {}
