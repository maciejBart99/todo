import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-application-discount-segment-header',
  templateUrl: './discount-segment-header.component.html',
  styleUrls: ['./discount-segment-header.component.scss']
})
export class DiscountSegmentHeaderComponent{
  @Input() title: string;
}
