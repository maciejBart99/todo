import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DiscountEntryModel, DiscountRow, SegmentModel } from '@todo-application/discount/domain';
import { DiscountSegmentPresenter } from './discount-segment.presenter';

@Component({
  selector: 'todo-application-discount-segment',
  templateUrl: './discount-segment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DiscountSegmentPresenter]
})
export class DiscountSegmentComponent  {
  @Input() set segment(seg: SegmentModel) {
    this.segmentData = seg;
    this.columnConfig = seg.discounts ? this.presenter.getColumnHeaders(seg.discounts[0].entries.length) : [];
    this.source = seg.discounts ? this.presenter.getDataSource(seg.discounts, this.columnConfig) : [];
  }
  @Output() entryEdited: EventEmitter<DiscountEntryModel> = new EventEmitter<DiscountEntryModel>();

  constructor(private presenter: DiscountSegmentPresenter) {}

  source: DiscountRow[];
  segmentData: SegmentModel;
  columnConfig: string[];

  sendEdited(value: string, discountEntry: DiscountEntryModel): void {
    this.entryEdited.emit({...discountEntry, value: value});
  }
}
