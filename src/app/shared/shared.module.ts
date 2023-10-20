import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarnavComponent } from './components/sidebarnav/sidebarnav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarnavComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
