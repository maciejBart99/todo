import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAppMainShellModule } from '@todo-application/todo-app/main-shell';
import { TodoAppCoreModule } from '@todo-application/todo-app/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            TodoAppCoreModule,
            TodoAppMainShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
