import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAuthFacadeService } from './public-auth-facade.service';

@NgModule({
  imports: [CommonModule],
  providers: [PublicAuthFacadeService]
})
export class AuthPublicModule {}
