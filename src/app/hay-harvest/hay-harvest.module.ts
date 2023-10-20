import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HayHarvestRoutingModule } from './hay-harvest-routing.module';
import { FieldsPageComponent } from './pages/fields-page/fields-page.component';
import { DataPageComponent } from './pages/data-page/data-page.component';


@NgModule({
  declarations: [
    FieldsPageComponent,
    DataPageComponent
  ],
  imports: [
    CommonModule,
    HayHarvestRoutingModule
  ]
})
export class HayHarvestModule { }
