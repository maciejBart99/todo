import {
  initialState,
  DISCOUNT_FEATURE_KEY,
  DiscountState,
} from './discount.reducer';
import { discountQuery } from './discount.selectors';

describe('Discount Selectors', () => {
  let storeState: { [DISCOUNT_FEATURE_KEY]: DiscountState };

  beforeEach(() => {
    storeState = {
      [DISCOUNT_FEATURE_KEY]: initialState,
    };
  });

  test('getDiscountModel() returns discountModel value', () => {
    const result = discountQuery.getDiscountModel(storeState);

    expect(result).toBe(storeState[DISCOUNT_FEATURE_KEY].discountModel);
  });

  test('getDiscountModelLoading() returns discountModelLoading value', () => {
    const result = discountQuery.getDiscountModelLoading(storeState);

    expect(result).toBe(storeState[DISCOUNT_FEATURE_KEY].discountModelLoading);
  });

  test('getDiscountModelLoadError() returns discountModelLoadError value', () => {
    const result = discountQuery.getDiscountModelLoadError(storeState);

    expect(result).toBe(
      storeState[DISCOUNT_FEATURE_KEY].discountModelLoadError
    );
  });

  test('getDiscountModelUpdating() returns discountModelUpdating value', () => {
    const result = discountQuery.getDiscountModelUpdating(storeState);

    expect(result).toBe(storeState[DISCOUNT_FEATURE_KEY].discountModelUpdating);
  });

  test('getDiscountModelUpdateError() returns discountModelUpdateError value', () => {
    const result = discountQuery.getDiscountModelUpdateError(storeState);

    expect(result).toBe(
      storeState[DISCOUNT_FEATURE_KEY].discountModelUpdateError
    );
  });
});
