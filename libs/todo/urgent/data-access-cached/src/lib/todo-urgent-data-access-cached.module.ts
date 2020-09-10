import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoUrgentDataAccessHttpModule } from '@todo-application/todo/urgent/data-access-http';
import { CacheDataService } from './cache-data.service';
import { TodoDataService } from '@todo-application/todo/domain';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TodoUrgentDataAccessHttpModule.asHelper(),
  ],
  providers: [{ provide: TodoDataService, useClass: CacheDataService }],
})
export class TodoUrgentDataAccessCachedModule {}
