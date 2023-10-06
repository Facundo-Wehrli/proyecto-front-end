import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//TODO LAZY LOADING para, home page, contact page, etc
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
