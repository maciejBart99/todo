import { fromDiscountActions } from './discount.actions';
import {
  DiscountState,
  initialState,
  discountReducer,
} from './discount.reducer';
import { statesEqual } from '@valueadd/testing';

describe('Discount Reducer', () => {
  let state: DiscountState;

  beforeEach(() => {
    state = { ...initialState };
  });

  describe('unknown action', () => {
    test('returns the initial state', () => {
      const action = {} as any;
      const result = discountReducer(state, action);

      expect(result).toBe(state);
    });
  });

  describe('GetDiscountModel', () => {
    test('sets discountModel, discountModelLoading, discountModelLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.GetDiscountModel(payload);
      const result = discountReducer(state, action);

      expect(result.discountModel).toEqual(null);
      expect(result.discountModelLoading).toEqual(true);
      expect(result.discountModelLoadError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'discountModel',
          'discountModelLoading',
          'discountModelLoadError',
        ])
      ).toBeTruthy();
    });
  });

  describe('GetDiscountModelFail', () => {
    test('sets discountModel, discountModelLoading, discountModelLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.GetDiscountModelFail(payload);
      const result = discountReducer(state, action);

      expect(result.discountModel).toEqual(null);
      expect(result.discountModelLoading).toEqual(false);
      expect(result.discountModelLoadError).toEqual(payload);
      expect(
        statesEqual(result, state, [
          'discountModel',
          'discountModelLoading',
          'discountModelLoadError',
        ])
      ).toBeTruthy();
    });
  });

  describe('GetDiscountModelSuccess', () => {
    test('sets discountModel, discountModelLoading, discountModelLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.GetDiscountModelSuccess(payload);
      const result = discountReducer(state, action);

      expect(result.discountModel).toEqual(payload);
      expect(result.discountModelLoading).toEqual(false);
      expect(result.discountModelLoadError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'discountModel',
          'discountModelLoading',
          'discountModelLoadError',
        ])
      ).toBeTruthy();
    });
  });

  describe('UpdateDiscountModel', () => {
    test('sets discountModelUpdating, discountModelUpdateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.UpdateDiscountModel(payload);
      const result = discountReducer(state, action);

      expect(result.discountModelUpdating).toEqual(true);
      expect(result.discountModelUpdateError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'discountModelUpdating',
          'discountModelUpdateError',
        ])
      ).toBeTruthy();
    });
  });

  describe('UpdateDiscountModelFail', () => {
    test('sets discountModelUpdating, discountModelUpdateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.UpdateDiscountModelFail(payload);
      const result = discountReducer(state, action);

      expect(result.discountModelUpdating).toEqual(false);
      expect(result.discountModelUpdateError).toEqual(payload);
      expect(
        statesEqual(result, state, [
          'discountModelUpdating',
          'discountModelUpdateError',
        ])
      ).toBeTruthy();
    });
  });

  describe('UpdateDiscountModelSuccess', () => {
    test('sets discountModelUpdating, discountModelUpdateError and does not modify other state properties', () => {
      state = {
        ...initialState,
        discountModelCollection: [{ id: '1', name: 'test' } as any],
      };
      const payload = { id: '1', name: 'test2' } as any;
      const action = new fromDiscountActions.UpdateDiscountModelSuccess(
        payload
      );
      const result = discountReducer(state, action);

      expect((result as any).discountModelUpdating).toEqual(false);
      expect((result as any).discountModelUpdateError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'discountModelUpdating',
          'discountModelUpdateError',
        ])
      ).toBeTruthy();
    });
  });
});
