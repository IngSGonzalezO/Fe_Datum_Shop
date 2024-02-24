import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error1Component } from './error1/error1.component';
import { Error2Component } from './error2/error2.component';
import { Error3Component } from './error3/error3.component';
import { Error4Component } from './error4/error4.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error1',
        component: Error1Component
      },
      {
        path: 'error2',
        component: Error2Component
      },
      {
        path: 'error3',
        component: Error3Component
      },
      {
        path: 'error4',
        component: Error4Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
