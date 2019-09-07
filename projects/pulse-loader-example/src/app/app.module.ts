import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PulseLoaderModule } from 'pulse-loader/lib/pulse-loader.module';

@NgModule({
  imports: [BrowserModule, PulseLoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
