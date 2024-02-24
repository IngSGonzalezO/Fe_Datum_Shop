import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './dashboard/default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce.component';

var routingAnimation = localStorage.getItem('animate')

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default',
          breadcrumb: 'Default',
          animation: [routingAnimation]
        }
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Comercio Electrónico',
          breadcrumb: 'Comercio Electrónico',
          animation: [routingAnimation]
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
