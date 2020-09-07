import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { Observable } from 'rxjs';
import { DiscountFacade } from './discount.facade';
import { fromDiscountActions } from './discount.actions';

describe('DiscountFacade', () => {
  let actions: Observable<any>;
  let facade: DiscountFacade;
  let store: jest.Mocked<MockStore<{}>>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [],
        providers: [
          DiscountFacade,
          provideMockStore(),
          provideMockActions(() => actions),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });
      facade = TestBed.get(DiscountFacade);
      store = TestBed.get(Store);
      jest.spyOn(store, 'dispatch');
    });

    describe('#getDiscountModel', () => {
      test('should dispatch fromDiscountActions.GetDiscountModel action', () => {
        const payload = {} as any;
        const action = new fromDiscountActions.GetDiscountModel(payload);

        facade.getDiscountModel(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });

    describe('#updateDiscountModel', () => {
      test('should dispatch fromDiscountActions.UpdateDiscountModel action', () => {
        const payload = {} as any;
        const action = new fromDiscountActions.UpdateDiscountModel(payload);

        facade.updateDiscountModel(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });
  });
});
