import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserLoginButtonComponent } from './user-login-button/user-login-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [UserLoginButtonComponent],
  exports: [UserLoginButtonComponent],
})
export class AuthUiUserLoginButtonModule {}
