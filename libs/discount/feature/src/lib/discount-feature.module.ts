import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsViewComponent } from './discounts-view/discounts-view.component';
import { MatTableModule } from '@angular/material/table';
import { DiscountDataAccessModule } from '@todo-application/discount/data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { SharedUiModule } from '@todo-application/shared/ui';
import { DiscountUiModule } from '@todo-application/discount/ui';
@NgModule({
  imports: [SharedUiModule, DiscountUiModule, CommonModule, MatTableModule, DiscountDataAccessModule, ReactiveFormsModule, MatTooltipModule, MatButtonModule],
  declarations: [DiscountsViewComponent],
  exports: [DiscountsViewComponent]
})
export class DiscountFeatureModule {}
