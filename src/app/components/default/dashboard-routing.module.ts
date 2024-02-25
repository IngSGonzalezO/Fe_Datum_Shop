import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce.component';

var routingAnimation = localStorage.getItem('animate')

const routes: Routes = [
  {
    path: '',
    children: [
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
