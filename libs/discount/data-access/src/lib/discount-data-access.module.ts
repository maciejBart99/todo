import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  DISCOUNT_FEATURE_KEY,
  initialState as discountInitialState,
  discountReducer,
} from './+state/discount.reducer';
import { DiscountEffects } from './+state/discount.effects';
import { DiscountFacade } from './+state/discount.facade';
import { DiscountDataService } from './services/discount-data.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DISCOUNT_FEATURE_KEY, discountReducer, {
      initialState: discountInitialState,
    }),
    EffectsModule.forFeature([DiscountEffects]),
  ],
  providers: [DiscountFacade, DiscountDataService],
})
export class DiscountDataAccessModule {}
