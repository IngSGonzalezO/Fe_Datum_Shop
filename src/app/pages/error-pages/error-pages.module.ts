import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { Error1Component } from './error1/error1.component';
import { Error2Component } from './error2/error2.component';
import { Error3Component } from './error3/error3.component';
import { Error4Component } from './error4/error4.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    Error1Component,
    Error2Component,
    Error3Component,
    Error4Component,
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot()

  ]
})
export class ErrorPagesModule { }
