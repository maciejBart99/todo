import { DiscountEntryModel } from '@todo-application/discount/domain';

export interface DiscountRow {
  label: string;
  editable: boolean;
  tooltip: string;
  data:{[column: string]: DiscountEntryModel};
}
