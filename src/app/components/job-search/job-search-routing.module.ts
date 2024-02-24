import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ListViewComponent } from './list-view/list-view.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards-view',
        component: CardsViewComponent,
        data: {
          title: 'Cards View',
          breadcrumb: 'Cards View',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'list-view',
        component: ListViewComponent,
        data: {
          title: 'List View',
          breadcrumb: 'List View',
          animation: [routingAnimation]
        }
       
      },  
      {
        path: 'job-details',
        component: JobDetailsComponent,
        data: {
          title: 'Job Details',
          breadcrumb: 'Job Details',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'apply',
        component: ApplyComponent,
        data: {
          title: 'Apply',
          breadcrumb: 'Apply',
          animation: [routingAnimation]
        }
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchRoutingModule { }
