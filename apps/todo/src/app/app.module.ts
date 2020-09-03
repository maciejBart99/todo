import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCoreModule } from '@todo-application/main/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            EffectsModule.forRoot([]),
            StoreDevtoolsModule.instrument({
              maxAge: 25
            }),
            RouterModule.forRoot([
              {path: '**', redirectTo: 'todo/regular'}
            ]),
            StoreModule.forRoot({}),
            MainCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
