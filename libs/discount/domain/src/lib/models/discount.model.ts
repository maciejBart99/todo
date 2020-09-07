import { DiscountEntryModel } from './discount-entry.model';

export interface DiscountModel {
  label: string;
  editable: boolean;
  tooltip: string;
  entries: DiscountEntryModel[];
}
