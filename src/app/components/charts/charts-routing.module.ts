import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartistComponent } from './chartist/chartist.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-chart',
        component: ApexChartComponent,
        data: {
          title: "Apex Chart",
          breadcrumb: "Apex Chart"
          ,
          animation: [routingAnimation]
        }
        
      },
      {
        path: 'google-chart',
        component: GoogleChartComponent,
        data: {
          title: "Google Chart",
          breadcrumb: "Google Chart"
        }
        
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
          title: "Chart Js",
          breadcrumb: "Chart Js"
        }  
      },
      {
        path: 'chartist',
        component: ChartistComponent,
        data: {
          title: "Chartist",
          breadcrumb: "Chartist"
        }
        
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
