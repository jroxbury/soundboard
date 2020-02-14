import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';

import {
  AppComponent
} from './app.component';
import {
  AudioButtonComponent
} from './audio-button/audio-button.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AudioButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
