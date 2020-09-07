import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DISCOUNT_FEATURE_KEY, DiscountState } from './discount.reducer';

// Lookup the 'Discount' feature state managed by NgRx
const getDiscountState = createFeatureSelector<DiscountState>(
  DISCOUNT_FEATURE_KEY
);

const getDiscountModel = createSelector(
  getDiscountState,
  (state) => state.discountModel
);

const getDiscountModelLoading = createSelector(
  getDiscountState,
  (state) => state.discountModelLoading
);

const getDiscountModelLoadError = createSelector(
  getDiscountState,
  (state) => state.discountModelLoadError
);

const getDiscountModelUpdating = createSelector(
  getDiscountState,
  (state) => state.discountModelUpdating
);

const getDiscountModelUpdateError = createSelector(
  getDiscountState,
  (state) => state.discountModelUpdateError
);

const getDiscountPendingChanges = createSelector(
  getDiscountState,
  (state) => state.discountPendingChanges
);

export const discountQuery = {
  getDiscountModel,
  getDiscountModelLoading,
  getDiscountModelLoadError,
  getDiscountModelUpdating,
  getDiscountModelUpdateError,
  getDiscountPendingChanges
};
