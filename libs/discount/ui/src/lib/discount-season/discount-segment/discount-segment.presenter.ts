import { Injectable } from '@angular/core';
import { DiscountModel, DiscountRow } from '@todo-application/discount/domain';

@Injectable()
export class DiscountSegmentPresenter {
  getColumnHeaders(entriesCount: number): string[]  {
    const result =  [...Array(entriesCount - 1).keys()].map(
        el => el as number + 14).map(
      (el, ind) => ind === 0 ? '<' + el : String(el)
    ).map(
      (el, ind) => ind === entriesCount - 2 ? '>' + el : el
    );
    return ['label', ...result];
  }

  getDataSource(discounts: DiscountModel[], columns: string[]): DiscountRow[] {
    return discounts.map(discount => {
      const data =  discount.entries.reduce((total, item, ind) => ({
        [columns[ind]]: item, ...total
      }), {});

      return {
        data: data,
        label: discount.label,
        tooltip: discount.tooltip,
        editable: discount.editable
      };
    });
  }
}
