import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoAppMobileCoreModule } from '@todo-application/todo-app-mobile/core';
import { TodoAppMobileMainShellModule } from '@todo-application/todo-app-mobile/main-shell';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            CommonModule,
            BrowserAnimationsModule,
            TodoAppMobileMainShellModule,
    TodoAppMobileCoreModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
