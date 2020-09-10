import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRestService } from './todo-rest.service';
import { TodoDataService } from '@todo-application/todo/domain';

@NgModule({})
export class TodoUrgentDataAccessHttpModule {
  static asMainProvider() {
    return {
      ngModule: TodoUrgentDataAccessHttpModule,
      providers: [{ provide: TodoDataService, useClass: TodoRestService }],
    };
  }

  static asHelper() {
    return {
      ngModule: TodoUrgentDataAccessHttpModule,
      providers: [TodoRestService],
    };
  }
}
