import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { Select2Component } from './select2/select2.component';
import { SwitchComponent } from './switch/switch.component';import { TouchspinComponent } from './touchspin/touchspin.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "datepicker",
        component: DatepickerComponent,
        data: {
          title: 'Datepicker',
          breadcrumb: 'Datepicker',
          animation: [routingAnimation]
        }
      },
      {
        path: "touchspin",
        component: TouchspinComponent,
        data: {
          title: 'Touchspin',
          breadcrumb: 'Touchspin',
          animation: [routingAnimation]
        }
      },
      {
        path: "select2",
        component: Select2Component,
        data: {
          title: 'Select2',
          breadcrumb: 'Select2',
          animation: [routingAnimation]
        }
      },
      {
        path: "switch",
        component: SwitchComponent,
        data: {
          title: 'Switch',
          breadcrumb: 'Switch',
          animation: [routingAnimation]
        }
      },
      {
        path: "typeahead",
        component: TypeaheadComponent,
        data: {
          title: 'Typeahead',
          breadcrumb: 'Typeahead',
          animation: [routingAnimation]
        }
      },
      {
        path: "clipboard",
        component: ClipboardComponent,
        data: {
          title: 'Clipboard',
          breadcrumb: 'Clipboard'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormsWidgetsRoutingModule { }
