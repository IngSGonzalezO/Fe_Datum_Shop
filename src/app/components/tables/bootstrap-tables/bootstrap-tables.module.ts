import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapTablesRoutingModule } from './bootstrap-tables-routing.module';
import { BootstrapTablesComponent } from '../bootstrap-tables/bootstrap-tables.component'
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BreckpointComponent } from './breckpoint/breckpoint.component';
import { CaptionComponent } from './caption/caption.component';
import { CommonBorderTableComponent } from './common-border-table/common-border-table.component';
import { CustomWithHoverComponent } from './custom-with-hover/custom-with-hover.component';
import { InversePrimaryBgComponent } from './inverse-primary-bg/inverse-primary-bg.component';
import { InverseTableComponent } from './inverse-table/inverse-table.component';
import { ContextualClassesComponent } from './contextual-classes/contextual-classes.component';
import { HoverableRowsComponent } from './hoverable-rows/hoverable-rows.component';
import { HeadOptionsComponent } from './head-options/head-options.component';
import { CommonSizingTableComponent } from './common-sizing-table/common-sizing-table.component';

import { ResponsiveTablesComponent } from './responsive-tables/responsive-tables.component';
import { StripedRowComponent } from './striped-row/striped-row.component';
import { StripedRowInverseComponent } from './striped-row-inverse/striped-row-inverse.component';
import { TextBgUtilitiesComponent } from './text-bg-utilities/text-bg-utilities.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BootstrapTablesComponent,
    BasicTableComponent,
    BreckpointComponent,
    CaptionComponent,
    CommonBorderTableComponent,
    CommonSizingTableComponent,
    ContextualClassesComponent,
    CustomWithHoverComponent,
    HeadOptionsComponent,
    HoverableRowsComponent,
    InversePrimaryBgComponent,
    InverseTableComponent,
    ResponsiveTablesComponent,
    StripedRowComponent,
    StripedRowInverseComponent,
    TextBgUtilitiesComponent
  ],
  imports: [
    CommonModule,
    BootstrapTablesRoutingModule,
    SharedModule
  ]
})
export class BootstrapTablesModule { }
