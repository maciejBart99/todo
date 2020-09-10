import { NgModule } from '@angular/core';
import { TodoRestService } from './todo-rest.service';
import { TodoDataService } from '@todo-application/todo/domain';

@NgModule({})
export class TodoRegularDataAccessHttpModule {
  static asMainProvider() {
    return {
      ngModule: TodoRegularDataAccessHttpModule,
      providers: [{ provide: TodoDataService, useClass: TodoRestService }],
    };
  }

  static asHelper() {
    return {
      ngModule: TodoRegularDataAccessHttpModule,
      providers: [TodoRestService],
    };
  }
}
