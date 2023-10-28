import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
