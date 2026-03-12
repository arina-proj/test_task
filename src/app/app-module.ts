import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WelcomeComponent } from './welcome/welcome';


@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, WelcomeComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
