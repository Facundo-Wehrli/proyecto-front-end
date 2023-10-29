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
  shouldShowNavbar: boolean = false;

  checkNavbarVisibility(currentUrl: string): void {
    if (
      currentUrl !== '/auth/login' &&
      currentUrl !== '/auth/register' &&
      currentUrl !== '/'
    ) {
      this.shouldShowNavbar = true;
    } else {
      this.shouldShowNavbar = false;
    }
  }
}
