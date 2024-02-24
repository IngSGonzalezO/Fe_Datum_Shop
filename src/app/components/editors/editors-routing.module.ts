import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';
import { NgxEditorsComponent } from './ngx-editors/ngx-editors.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ngx-editors',
        component: NgxEditorsComponent,
        data: {
          title: 'Ngx Editors',
          breadcrumb: 'Ngx Editors',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'mde-editors',
        component: MdeEditorsComponent,
        data: {
          title: 'Mde Editors',
          breadcrumb: 'Mde Editors',
          animation: [routingAnimation]
        }
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
