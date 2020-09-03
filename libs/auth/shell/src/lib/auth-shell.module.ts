import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDataAccessModule } from '@todo-application/auth/data-access';

@NgModule({
  imports: [CommonModule, AuthDataAccessModule],
})
export class AuthShellModule {}
