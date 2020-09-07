import { DiscountModel } from './discount.model';

export interface SegmentModel {
  segment: string;
  discounts: DiscountModel[];
}
