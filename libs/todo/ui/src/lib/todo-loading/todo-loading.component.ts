import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-application-todo-loading',
  templateUrl: './todo-loading.component.html',
  styleUrls: ['./todo-loading.component.scss']
})
export class TodoLoadingComponent {
  @Input() showLoading: boolean;
}
