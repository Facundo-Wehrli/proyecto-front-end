import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
      {
        path: 'weather',
        component: WeatherPageComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
