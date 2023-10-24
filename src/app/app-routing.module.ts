import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//TODO Crear módulo para servicios, nosotros/experiencia, contacto, contabilidad(admins), y su respectivo lazy loading (CORE MODULE)
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  /* Redirects any unknown route to the 'auth' route. This means that if
  a user enters a URL that does not match any of the defined routes, they will be redirected to the
  'auth' route. */
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
  /* The `{path:'', redirectTo:'/core', pathMatch:'full'}` route is a wildcard route that redirects the
  user to the '/core' route when the application is loaded. The `path` property is set to an empty
  string, which means it matches any URL. The `redirectTo` property specifies the route to redirect
  to, in this case, '/core'. The `pathMatch` property is set to 'full', which means the entire URL
  must match the empty string for the redirect to occur. */
  {path:'', redirectTo:'/core', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
