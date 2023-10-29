import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  private router = inject(Router);

/**
 * The function shouldShowNavbar returns true if the current URL is not '/auth/login' or
 * '/auth/register', and false otherwise.
 */
  shouldShowNavbar(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/auth/login' && currentUrl !== '/auth/register';
  }
}
