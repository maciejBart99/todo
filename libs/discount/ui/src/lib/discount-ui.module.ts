import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPersistChangesComponent } from './discount-persist-changes/discount-persist-changes.component';
import { DiscountSeasonComponent } from './discount-season/discount-season.component';
import { DiscountSegmentComponent } from './discount-season/discount-segment/discount-segment.component';
import { DiscountEntryFieldComponent } from './discount-season/discount-segment/discount-entry-field/discount-entry-field.component';
import { DiscountSegmentHeaderComponent } from './discount-season/discount-segment/discount-segment-header/discount-segment-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTableModule, MatTooltipModule],
  declarations: [DiscountPersistChangesComponent, DiscountSeasonComponent, DiscountSegmentComponent, DiscountEntryFieldComponent, DiscountSegmentHeaderComponent],
  exports: [DiscountPersistChangesComponent, DiscountSeasonComponent]
})
export class DiscountUiModule {}
