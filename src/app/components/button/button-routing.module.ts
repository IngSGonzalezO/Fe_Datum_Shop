import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonComponent } from './button.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { EdgeStyleComponent } from './edge-style/edge-style.component';
import { FlatStyleComponent } from './flat-style/flat-style.component';
import { RaisedStyleComponent } from './raised-style/raised-style.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'button-group',
        component: ButtonGroupComponent,
        data: {
          title: "Button Group",
          breadcrumb: "Button Group",
          animation: [routingAnimation]
        }
      },
      {
        path: 'default-style',
        component: DefaultStyleComponent,
        data: {
          title: "Default Style",
          breadcrumb: "Default Style",
          animation: [routingAnimation]
        }
      },
      {
        path: 'edge-style',
        component: EdgeStyleComponent,
        data: {
          title: "Edge Style",
          breadcrumb: "Edge Style",
          animation: [routingAnimation]
        }
      },
      {
        path: 'flat-style',
        component: FlatStyleComponent,
        data: {
          title: "Flat Style",
          breadcrumb: "Flat Style",
          animation: [routingAnimation]
        }
      },
      {
        path: 'raised-style',
        component: RaisedStyleComponent,
        data: {
          title: "Raised Style",
          breadcrumb: "Raised Style",
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
export class ButtonRoutingModule { }
