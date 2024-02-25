import { Routes } from '@angular/router';

export const full: Routes = [
  {
    path: 'error-page',
    loadChildren: () => import('../../pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule),
  },
  {
    path: 'authentication',
    loadChildren: () => import('../../pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];


