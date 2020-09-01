import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TodoFeatureModule } from '@todo-application/todo/feature';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StoreModule.forRoot({}), TodoFeatureModule, EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({
    maxAge: 25
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
