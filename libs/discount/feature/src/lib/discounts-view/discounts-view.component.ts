import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscountEntryModel, SeasonModel } from '@todo-application/discount/domain';
import { DiscountFacade } from '@todo-application/discount/data-access';
import { map } from 'rxjs/operators';

@Component({
  selector: 'todo-application-discounts-view',
  templateUrl: './discounts-view.component.html'
})
export class DiscountsViewComponent implements OnInit {
  seasons$: Observable<SeasonModel[]>;
  loading$: Observable<boolean>;

  constructor(private store: DiscountFacade) {
    this.loading$ = this.store.discountModelLoading$;
  }

  ngOnInit(): void {
    this.seasons$ = this.store.discountModel$.pipe(map(model => model?.seasons));
    this.store.getDiscounts();
  }

  discountChanged(model: DiscountEntryModel): void {
    this.store.addPendingChange(model);
  }

  saveChanges() {
    this.store.savePendingChanges();
  }

}
