import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PulseLoaderModule } from '@rifo/pulse-loader';

@NgModule({
  imports: [BrowserModule, PulseLoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
