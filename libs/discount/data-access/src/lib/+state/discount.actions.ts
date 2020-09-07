import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { DiscountEntryModel, DiscountsModel } from '@todo-application/discount/domain';

export namespace fromDiscountActions {
  export enum Types {
    GetDiscountModel = '[Discount] Get Discount Model',
    GetDiscountModelFail = '[Discount] Get Discount Model Fail',
    GetDiscountModelSuccess = '[Discount] Get Discount Model Success',
    UpdateDiscountModel = '[Discount] Update Discount Model',
    UpdateDiscountModelFail = '[Discount] Update Discount Model Fail',
    UpdateDiscountModelSuccess = '[Discount] Update Discount Model Success',
    AddPendingChange = '[Discount] Add pending change',
    ClearPendingChanges = '[Discount] Clear pending changes',
  }

  export class GetDiscountModel implements Action {
    readonly type = Types.GetDiscountModel;
  }

  export class GetDiscountModelFail implements Action {
    readonly type = Types.GetDiscountModelFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class GetDiscountModelSuccess implements Action {
    readonly type = Types.GetDiscountModelSuccess;

    constructor(public payload: DiscountsModel) {
    }
  }

  export class UpdateDiscountModel implements Action {
    readonly type = Types.UpdateDiscountModel;
  }

  export class UpdateDiscountModelFail implements Action {
    readonly type = Types.UpdateDiscountModelFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class UpdateDiscountModelSuccess implements Action {
    readonly type = Types.UpdateDiscountModelSuccess;

    constructor(public payload: DiscountsModel) {}
  }

  export class AddPendingChange implements Action {
    readonly type = Types.AddPendingChange;

    constructor(public payload: DiscountEntryModel) {}
  }

  export class ClearPendingChanges implements Action {
    readonly type = Types.ClearPendingChanges;
  }

  export type CollectiveType =
    | GetDiscountModel
    | GetDiscountModelFail
    | GetDiscountModelSuccess
    | UpdateDiscountModel
    | UpdateDiscountModelFail
    | AddPendingChange
    | ClearPendingChanges
    | UpdateDiscountModelSuccess;
}
