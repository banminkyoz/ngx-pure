import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PureButtonModule } from 'src/components/button/button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    PureButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
