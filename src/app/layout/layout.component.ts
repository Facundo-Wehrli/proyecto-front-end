import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkNavbarVisibility(event.url);
      }
    });
  }
  shouldShow: boolean = true;

  checkNavbarVisibility(currentUrl: string): void {
    if (
      currentUrl === '/core' ||
      currentUrl === '/core/home' ||
      currentUrl === '/core/contact' ||
      currentUrl === '/' ||
      currentUrl === '/core/about'
    ) {
      this.shouldShow = true;
    } else if (currentUrl === '/auth' || currentUrl === '/auth/login' || currentUrl === '/auth/register') {
      this.shouldShow = false;
    }
  }
}
