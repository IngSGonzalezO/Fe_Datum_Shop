import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from 'src/app/shared/directives/sortable.directive';


@NgModule({
  declarations: [
    DataTableComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class DataTableModule { }
