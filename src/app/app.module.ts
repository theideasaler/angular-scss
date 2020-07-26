import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScssSampleComponent } from './scss-sample/scss-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ScssSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
