import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    WeatherPageComponent,
    ServicesPageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
