import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDataAccessModule } from '@todo-application/auth/data-access';
import { AuthPublicModule } from '@todo-application/auth/public';

@NgModule({
  imports: [CommonModule, AuthDataAccessModule, AuthPublicModule],
})
export class AuthShellModule {}
