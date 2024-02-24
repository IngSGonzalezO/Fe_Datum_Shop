import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixComponent } from './footer-fix/footer-fix.component';
import { FooterLightComponent } from './footer-light/footer-light.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'footer-dark',
        component: FooterDarkComponent,
        data: {
          title: 'Page Layout',
          breadcrumb: 'Footer Dark',
          animation: [routingAnimation]
        }
      },
      {
        path: 'footer-light',
        component: FooterLightComponent,
        data: {
          title: 'Footer Light',
          breadcrumb: 'Footer Light',
          animation: [routingAnimation]
        }
      },
      {
        path: 'footer-fixed',
        component: FooterFixComponent,
        data: {
          title: 'Footer Fixed',
          breadcrumb: 'Footer Fixed',
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
export class PageLayoutRoutingModule { }
