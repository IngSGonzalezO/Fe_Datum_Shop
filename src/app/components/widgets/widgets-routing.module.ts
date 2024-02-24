import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartIndexComponent } from './chart/chart-index/chart-index.component';
import { IndexComponent } from './general/index/index.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'general',
        component: IndexComponent,
        data: {
          title: 'General',
          breadcrumb: 'general',
          animation: [routingAnimation]
        }
      },
      {
        path: 'chart',
        component: ChartIndexComponent,
        data: {
          title: 'Chart',
          breadcrumb: 'chart',
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
export class WidgetsRoutingModule { }
