import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoAppMainShellModule } from '@todo-application/todo-app/main/shell';
import { TodoAppCoreModule } from '@todo-application/todo-app/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
            TodoAppMainShellModule,
              TodoAppCoreModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
