import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DiscountEntryModel, DiscountsModel } from '@todo-application/discount/domain';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class DiscountDataService {
  readonly endpoints = {
    getDiscountModel: 'discounts',
    updateDiscountModel: 'discounts',
  };
  constructor(private http: HttpClient) {}

  getDiscountModel( ): Observable<DiscountsModel> {
    return this.http.get<{data: DiscountsModel}>(this.endpoints.getDiscountModel).pipe(
      map(data => data.data)
    );
  }

  applyChangesToModel(changes: DiscountEntryModel[]): Observable<DiscountsModel> {
    // return this.http.put<any>(this.endpoints.updateDiscountModel, changes);
    console.log(changes);
    return of(null);
  }
}
