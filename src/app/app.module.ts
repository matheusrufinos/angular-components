import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibComponentsModule } from '../../projects/angular-components/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
