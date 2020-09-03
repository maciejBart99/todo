import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoShellModule } from '@todo-application/todo/shell';
import { RouterModule } from '@angular/router';
import { AuthShellModule } from '@todo-application/auth/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([]), StoreModule.forRoot({}), TodoShellModule, AuthShellModule, EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({
    maxAge: 25
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
