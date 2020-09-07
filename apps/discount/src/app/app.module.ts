import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscountFeatureModule } from '@todo-application/discount/feature';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, DiscountFeatureModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [DataPersistence],
  bootstrap: [AppComponent],
})
export class AppModule {}
