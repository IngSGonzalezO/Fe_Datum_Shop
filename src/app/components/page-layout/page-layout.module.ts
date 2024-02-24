import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { FooterFixComponent } from './footer-fix/footer-fix.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FooterFixComponent,
    FooterLightComponent,
    FooterDarkComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    SharedModule
  ]
})
export class PageLayoutModule { }
