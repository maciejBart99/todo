import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiscountEntryModel, SeasonModel } from '@todo-application/discount/domain';

@Component({
  selector: 'todo-application-discount-season',
  templateUrl: './discount-season.component.html'
})
export class DiscountSeasonComponent {
  @Input() season: SeasonModel;
  @Output() entryEdited: EventEmitter<DiscountEntryModel> = new EventEmitter<DiscountEntryModel>();
}

