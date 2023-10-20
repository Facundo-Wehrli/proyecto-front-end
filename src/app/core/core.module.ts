import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    WeatherPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
