import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CacheDataService } from './cache-data.service';
import { TodoRegularDataAccessHttpModule } from '@todo-application/todo/regular/data-access-http';
import { TodoDataService } from '@todo-application/todo/regular/util-abstract-data-service';

@NgModule({
  imports: [CommonModule, HttpClientModule, TodoRegularDataAccessHttpModule.asHelper()],
  providers: [{provide: TodoDataService, useClass: CacheDataService }]
})
export class TodoRegularDataAccessCachedModule {}
