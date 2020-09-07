import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoAppMobileCoreModule } from '@todo-application/todo-app-mobile/core';
import { TodoAppMobileMainShellModule } from '@todo-application/todo-app-mobile/main/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [TodoAppMobileMainShellModule, TodoAppMobileCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
