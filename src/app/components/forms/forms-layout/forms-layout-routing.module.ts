import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultFormsComponent } from './default-forms/default-forms.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: "",
    component: DefaultFormsComponent,
    data: {
      title: 'Default Forms',
      breadcrumb: 'Default Forms',
      animation: [routingAnimation]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsLayoutRoutingModule { }
