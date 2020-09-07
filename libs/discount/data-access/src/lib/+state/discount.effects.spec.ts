import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { cold, hot } from 'jest-marbles';
import { DiscountEffects } from './discount.effects';
import { fromDiscountActions } from './discount.actions';
import { DiscountDataService } from '../services/discount-data.service';
import { createSpyObj } from 'jest-createspyobj';

describe('DiscountEffects', () => {
  let discountDataService: jest.Mocked<DiscountDataService>;
  let actions: Observable<any>;
  let effects: DiscountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DiscountEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore({ initialState: {} }),
        {
          provide: DiscountDataService,
          useValue: createSpyObj(DiscountDataService),
        },
      ],
    });

    effects = TestBed.get(DiscountEffects);
    discountDataService = TestBed.get(DiscountDataService);
  });

  describe('getDiscountModel$', () => {
    test('returns GetDiscountModelSuccess action on success', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.GetDiscountModel({} as any);
      const completion = new fromDiscountActions.GetDiscountModelSuccess(
        payload
      );

      actions = hot('-a', { a: action });
      const response = cold('--b|', { b: payload });
      const expected = cold('---c', { c: completion });
      discountDataService.getDiscountModel.mockReturnValue(response);

      expect(effects.getDiscountModel$).toSatisfyOnFlush(() => {
        expect(discountDataService.getDiscountModel).toHaveBeenCalled();
      });
      expect(effects.getDiscountModel$).toBeObservable(expected);
    });

    test('returns GetDiscountModelFail action on fail', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.GetDiscountModel({} as any);
      const completion = new fromDiscountActions.GetDiscountModelFail(payload);

      actions = hot('-a', { a: action });
      const response = cold('-#', {}, payload);
      const expected = cold('--c', { c: completion });
      discountDataService.getDiscountModel.mockReturnValue(response);

      expect(effects.getDiscountModel$).toSatisfyOnFlush(() => {
        expect(discountDataService.getDiscountModel).toHaveBeenCalled();
      });
      expect(effects.getDiscountModel$).toBeObservable(expected);
    });
  });

  describe('updateDiscountModel$', () => {
    test('returns UpdateDiscountModelSuccess action on success', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.UpdateDiscountModel({} as any);
      const completion = new fromDiscountActions.UpdateDiscountModelSuccess(
        payload
      );

      actions = hot('-a', { a: action });
      const response = cold('--b|', { b: payload });
      const expected = cold('---c', { c: completion });
      discountDataService.updateDiscountModel.mockReturnValue(response);

      expect(effects.updateDiscountModel$).toSatisfyOnFlush(() => {
        expect(discountDataService.updateDiscountModel).toHaveBeenCalled();
      });
      expect(effects.updateDiscountModel$).toBeObservable(expected);
    });

    test('returns UpdateDiscountModelFail action on fail', () => {
      const payload = {} as any;
      const action = new fromDiscountActions.UpdateDiscountModel({} as any);
      const completion = new fromDiscountActions.UpdateDiscountModelFail(
        payload
      );

      actions = hot('-a', { a: action });
      const response = cold('-#', {}, payload);
      const expected = cold('--c', { c: completion });
      discountDataService.updateDiscountModel.mockReturnValue(response);

      expect(effects.updateDiscountModel$).toSatisfyOnFlush(() => {
        expect(discountDataService.updateDiscountModel).toHaveBeenCalled();
      });
      expect(effects.updateDiscountModel$).toBeObservable(expected);
    });
  });
});
