import { fromDiscountActions } from './discount.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { DiscountEntryModel, DiscountsModel } from '@todo-application/discount/domain';

export const DISCOUNT_FEATURE_KEY = 'discount';

export interface DiscountState {
  discountModel: DiscountsModel | null;
  discountModelLoading: boolean;
  discountModelLoadError: HttpErrorResponse | null;
  discountModelUpdating: boolean;
  discountModelUpdateError: HttpErrorResponse | null;
  discountPendingChanges: DiscountEntryModel[];
}

export interface DiscountPartialState {
  readonly [DISCOUNT_FEATURE_KEY]: DiscountState;
}

export const initialState: DiscountState = {
  discountModel: null,
  discountModelLoading: false,
  discountModelLoadError: null,
  discountModelUpdating: false,
  discountModelUpdateError: null,
  discountPendingChanges: []
};

export function discountReducer(
  state: DiscountState = initialState,
  action: fromDiscountActions.CollectiveType
): DiscountState {
  switch (action.type) {
    case fromDiscountActions.Types.GetDiscountModel: {
      state = {
        ...state,
        discountModel: null,
        discountModelLoading: true,
        discountModelLoadError: null,
      };
      break;
    }

    case fromDiscountActions.Types.GetDiscountModelFail: {
      state = {
        ...state,
        discountModel: null,
        discountModelLoading: false,
        discountModelLoadError: action.payload,
      };
      break;
    }

    case fromDiscountActions.Types.GetDiscountModelSuccess: {
      state = {
        ...state,
        discountModel: action.payload,
        discountModelLoading: false,
        discountModelLoadError: null,
      };
      break;
    }

    case fromDiscountActions.Types.UpdateDiscountModelFail: {
      state = {
        ...state,
        discountModelUpdating: false,
        discountModelUpdateError: action.payload,
      };
      break;
    }

    case fromDiscountActions.Types.AddPendingChange: {
      state = {
        ...state,
        discountPendingChanges: [...state.discountPendingChanges.filter(
          el => el.id !== action.payload.id), action.payload]
      };
      break;
    }

    case fromDiscountActions.Types.ClearPendingChanges: {
      state = {
        ...state,
        discountPendingChanges: []
      };
      break;
    }

    case fromDiscountActions.Types.UpdateDiscountModelSuccess: {
      state = {
        ...state,
        discountModelUpdating: false,
        discountModelUpdateError: null,
      };
      break;
    }
  }

  return state;
}
