import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cadastro } from './cadastro/cadastro';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [App, Navbar, Home, Cadastro],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
