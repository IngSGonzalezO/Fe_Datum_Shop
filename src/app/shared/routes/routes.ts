import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard"
    },
    loadChildren: () => import('../../components/default/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'ecommerce',
    data: {
      title: "E-commerce",
      breadcrumb: "E-commerce"
    },
    loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  },
];
