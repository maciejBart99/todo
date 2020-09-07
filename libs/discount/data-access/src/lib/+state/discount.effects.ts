import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { fromDiscountActions } from './discount.actions';
import { DiscountPartialState } from './discount.reducer';
import { DiscountDataService } from '../services/discount-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DiscountFacade } from './discount.facade'

@Injectable()
export class DiscountEffects {
  @Effect()
  getDiscountModel$ = this.dp.fetch(
    fromDiscountActions.Types.GetDiscountModel,
    {
      run: (action: fromDiscountActions.GetDiscountModel) => {
        return this.discountDataService
          .getDiscountModel()
          .pipe(
            map((data) => new fromDiscountActions.GetDiscountModelSuccess(data))
          );
      },
      onError: (
        action: fromDiscountActions.GetDiscountModel,
        error: HttpErrorResponse
      ) => {
        return new fromDiscountActions.GetDiscountModelFail(error);
      },
    }
  );

  @Effect()
  clearAfterUpdate$ = this.actions$.pipe(
    ofType(fromDiscountActions.Types.UpdateDiscountModelSuccess),
    map(_ => new fromDiscountActions.ClearPendingChanges())
  )

  @Effect()
  applyModelChanges$ = this.dp.pessimisticUpdate(
    fromDiscountActions.Types.UpdateDiscountModel,
    {
      run: (action: fromDiscountActions.UpdateDiscountModel) => {
        return this.storeFacade.discountPendingChanges$
          .pipe(
            take(1),
            filter(data => data.length > 0),
            switchMap(data => this.discountDataService.applyChangesToModel(data)),
            map(
              (data) => new fromDiscountActions.UpdateDiscountModelSuccess(data)
            )
          );
      },
      onError: (
        action: fromDiscountActions.UpdateDiscountModel,
        error: HttpErrorResponse
      ) => {
        return new fromDiscountActions.UpdateDiscountModelFail(error)
      },
    }
  );

  constructor(
    private dp: DataPersistence<DiscountPartialState>,
    private discountDataService: DiscountDataService,
    private storeFacade: DiscountFacade,
    private actions$: Actions
  ) {}
}
