import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DiscountPartialState } from './discount.reducer';
import { discountQuery } from './discount.selectors';
import { fromDiscountActions } from './discount.actions';
import { DiscountEntryModel } from '@todo-application/discount/domain';

@Injectable()
export class DiscountFacade {
  discountModel$ = this.store.pipe(select(discountQuery.getDiscountModel));
  discountModelLoading$ = this.store.pipe(
    select(discountQuery.getDiscountModelLoading)
  );
  discountModelLoadError$ = this.store.pipe(
    select(discountQuery.getDiscountModelLoadError)
  );
  discountModelUpdating$ = this.store.pipe(
    select(discountQuery.getDiscountModelUpdating)
  );
  discountModelUpdateError$ = this.store.pipe(
    select(discountQuery.getDiscountModelUpdateError)
  );
  discountPendingChanges$ = this.store.pipe(
    select(discountQuery.getDiscountPendingChanges)
  )

  constructor(private store: Store<DiscountPartialState>) {}

  getDiscounts(): void {
    this.store.dispatch(new fromDiscountActions.GetDiscountModel());
  }

  addPendingChange(data: DiscountEntryModel): void {
    this.store.dispatch(new fromDiscountActions.AddPendingChange(data));
  }

  savePendingChanges(): void {
    this.store.dispatch(new fromDiscountActions.UpdateDiscountModel());
  }
}
