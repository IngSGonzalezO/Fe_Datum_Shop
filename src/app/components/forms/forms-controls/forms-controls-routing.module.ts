import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { InputsComponent } from './inputs/inputs.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { ValidationComponent } from './validation/validation.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent,
        data: {
          title: 'Checkbox Radio',
          breadcrumb: 'Checkbox Radio',
          animation: [routingAnimation]
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups',
          breadcrumb: 'Input Groups',
          animation: [routingAnimation]
        }
      },
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: 'Base Inputs',
          breadcrumb: 'Base Inputs',
          animation: [routingAnimation]
        }
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent,
        data: {
          title: 'Mega Options',
          breadcrumb: 'Mega Options',
          animation: [routingAnimation]
        }
      },
      {
        path: 'validation',
        component: ValidationComponent,
        data: {
          title: 'Validation',
          breadcrumb: 'Validation',
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
export class FormsControlsRoutingModule { }
